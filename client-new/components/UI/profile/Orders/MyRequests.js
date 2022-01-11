import React, {useState} from 'react';
import {Scrollbar} from "../Scrollbar";
import dateFormat from 'dateformat'
import {
    DesktopView,
    ImageWrapper,
    ItemDetails,
    RequestName,
    RequestID,
    ItemWrapper,
    MobileView,
    NoRequestFound,
    OrderBox,
    OrderDetailsWrapper,
    OrderList,
    OrderListWrapper,
    Title,
} from './MyRequests.css';
import RequestDetails from './order-details/request-details';
import RequestCard from './order-card/request-card';
import OrderCardMobile from './order-card/request-card-mobile';
import useComponentSize from '../../../../hooks/useComponentSize';
import {PUBLIC_URL_API} from "../../../config";
import useFetch from "../../../../hooks/useFetch";



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
                        <img src={record.image} alt={record.name} />
                    </ImageWrapper>

                    <ItemDetails>
                        <RequestName>{record.name}</RequestName>
                        <RequestID>{record.bloodType}</RequestID>
                    </ItemDetails>
                </ItemWrapper>
            );
        },
    },
    {
        title: (
            'District'        ),
        dataIndex: 'district',
        key: 'district',
        align: 'center',
        width: 300,
        render:(text, record) => {
            return <p>{record.district?.toUpperCase() }</p>;
        },
    },
    {
        title:'Phone Number',
        dataIndex: '',
        key: 'phone',
        align: 'right',
        width: 100,
        render: (text, record) => {
            return <p>{record.phone}</p>;
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
                                    <RequestCard
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
                                <NoRequestFound>
                                    No Requests found
                                </NoRequestFound>
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
                            <RequestDetails
                                progressStatus={selection.status}
                                requestMessage={selection.requestMessage}
                                subtotal={selection.volume}
                                discount={selection.discount}
                                deliveryFee={1.99}
                                grandTotal={selection.totalPrice}
                                tableData={selection.helpers}
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
                        columns={orderTableColumns}
                        onClick={setSelection}
                    />
                </OrderList>
            </MobileView>
        </OrderBox>
    );
};

export default OrdersContent;
