import React, {useState} from 'react';
import {Scrollbar} from "../Scrollbar";
import dateFormat from 'dateformat'
import {
    DesktopView,
    ImageWrapper,
    ItemDetails,
    ItemName,
    ItemPrice,
    ItemWrapper,
    MobileView,
    NoOrderFound,
    OrderBox,
    OrderDetailsWrapper,
    OrderList,
    OrderListWrapper,
    Title,
} from './MyOrders.css';
import OrderDetails from './order-details/order-details';
import OrderCard from './order-card/order-card';
import OrderCardMobile from './order-card/order-card-mobile';
import useComponentSize from '../../../../hooks/useComponentSize';
import {PUBLIC_URL_API} from "../../../config";
import useFetch from "../../../../hooks/useFetch";


const progressData = ['Order Received', 'Order On The Way', 'Order Delivered'];

const orderTableColumns = [
    {
        title: 'Items',
        dataIndex: '',
        key: 'items',
        width: 250,
        ellipsis: true,
        render: (text, record) => {
            return (
                <ItemWrapper>
                    <ImageWrapper>
                        <img src={record.thumbImage} alt={record.name} />
                    </ImageWrapper>

                    <ItemDetails>
                        <ItemName>{record.name}</ItemName>
                        <ItemPrice>{record.price}</ItemPrice>
                    </ItemDetails>
                </ItemWrapper>
            );
        },
    },
    {
        title: (
            'Quantity'        ),
        dataIndex: 'quantity',
        key: 'quantity',
        align: 'center',
        width: 100,
        render:(text, record) => {
            return <p>{record.cartQuantity}</p>;
        },
    },
    {
        title:'Price',
        dataIndex: '',
        key: 'price',
        align: 'right',
        width: 100,
        render: (text, record) => {
            return <p>{record.price*record.cartQuantity}</p>;
        },
    },
];

const OrdersContent = () => {
    const [targetRef, size] = useComponentSize();
    const [data, isLoading] = useFetch(`${PUBLIC_URL_API}/api/auth/getMyRequests`, true)
    const [selection, setSelection] = useState(null);
    if (!data || isLoading) return <h3>loading...</h3>;

    return (
        <OrderBox>
            <DesktopView>
                <OrderListWrapper style={{height: size?.height}}>
                    <Title style={{padding: '0 20px'}}>
                        My Requests
                    </Title>

                    <Scrollbar className='order-scrollbar'>
                        <OrderList>
                            {data.data.length !== 0 ? (
                                data.data.map((current) => {
                                    const created = new Date(current.createdAt)
                                    const createdTime = dateFormat(created, "HH:MM")
                                    const createdDate=dateFormat(created,"dddd, mmmm dS, yyyy")
                                    return (
                                    <OrderCard
                                        key={current._id}
                                        orderId={current._id}
                                        className={current._id === selection?._id ? 'active' : ''}
                                        succeeded={current?.isActive}
                                        date={createdDate}
                                        createdTime={createdTime}
                                        amount={current.volume}
                                        onClick={() => setSelection(current)}
                                    />
                                    )
                                })
                            ) : (
                                <NoOrderFound>
                                    No order found
                                </NoOrderFound>
                            )}
                        </OrderList>
                    </Scrollbar>
                </OrderListWrapper>
                {
                    // @ts-ignore
                    <OrderDetailsWrapper ref={targetRef}>
                        <Title style={{padding: '0 20px'}}>
                            View Donors
                        </Title>
                        {selection && (
                            <OrderDetails
                                progressStatus={selection.status}
                                progressData={progressData}
                                address={selection.shippingAddress}
                                subtotal={selection.totalPrice}
                                discount={selection.discount}
                                deliveryFee={1.99}
                                grandTotal={selection.totalPrice}
                                tableData={selection.orderItems}
                                columns={orderTableColumns}
                            />
                        )}
                    </OrderDetailsWrapper>
                }
            </DesktopView>

            <MobileView>
                <OrderList>
                    <OrderCardMobile
                        orders={data.data}
                        // className={order && order.id === active ? 'active' : ''}
                        progressData={progressData}
                        columns={orderTableColumns}
                        onClick={setSelection}
                    />
                </OrderList>
            </MobileView>
        </OrderBox>
    );
};

export default OrdersContent;
