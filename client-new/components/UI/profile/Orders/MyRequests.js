import React, {useState} from 'react';
import {Scrollbar} from "../Scrollbar";
import dateFormat from 'dateformat'
import {DesktopView, ImageWrapper, ItemDetails, ItemWrapper, MobileView, NoRequestFound, RequestBox, RequestDetailsWrapper, RequestID, RequestList, RequestListWrapper, RequestName, Title,} from './MyRequests.css';
import RequestDetails from './order-details/request-details';
import RequestCard from './order-card/request-card';
import OrderCardMobile from './order-card/request-card-mobile';
import useComponentSize from '../../../../hooks/useComponentSize';
import {PUBLIC_URL_API} from "../../../config";
import useFetch from "../../../../hooks/useFetch";
import axios from "axios";
import Toast from "light-toast";
import {Button} from "../forms/label";
import {useRouter} from "next/router";


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
                        <img src={record.image} alt={record.name}/>
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
            'District'),
        dataIndex: 'district',
        key: 'district',
        align: 'center',
        width: 300,
        render: (text, record) => {
            return <p>{record.district?.toUpperCase()}</p>;
        },
    },
    {
        title: 'Phone Number',
        dataIndex: '',
        key: 'phone',
        align: 'right',
        width: 100,
        render: (text, record) => {
            return <p>{record.phone}</p>;
        },
    },
];
const deleteRequest = async (id) => {
    try {
        const ok = window.confirm("Do you want to delete the request you made?")
        if (ok) {
            const res = await axios.delete(`${PUBLIC_URL_API}/api/help/delete/${id}`);
            Toast.success(res.data.data)
            location.reload();
        }

    } catch (err) {
        Toast.fail(err?.response?.data?.error)
    }
}
const RequestContent = () => {
    const [targetRef, size] = useComponentSize();
    const [data, isLoading] = useFetch(`${PUBLIC_URL_API}/api/auth/getMyRequests`, true)
    const [selection, setSelection] = useState(null);
    const router=useRouter()
    if (!data || isLoading) return <h3>loading...</h3>;

    return (
        <RequestBox>
            <DesktopView>
                <RequestListWrapper style={{height: size?.height}}>
                    <Title style={{padding: '0 20px'}}>
                        My Requests
                    </Title>

                    <Scrollbar className='order-scrollbar'>
                        <RequestList>
                            {data.data.length !== 0 ? (
                                data.data.map((current) => {
                                    const created = new Date(current.createdAt)
                                    const createdTime = dateFormat(created, "HH:MM")
                                    const createdDate = dateFormat(created, "dddd, mmmm dS, yyyy")
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
                                    <Button type={'button'} style={{
                                        margin: '40px 0',
                                        width: '100%',
                                        fontSize: '15px',
                                        maxWidth: "80%",
                                        borderRadius: '10px'
                                    }} onClick={() => {
                                        router.push('/request')
                                    }}
                                    > Make a new request</Button>
                                </NoRequestFound>
                            )}
                        </RequestList>
                    </Scrollbar>
                </RequestListWrapper>
                {
                    <RequestDetailsWrapper ref={targetRef}>
                        <Title style={{padding: '0 20px'}}>
                            View Donors
                        </Title>
                        {selection && (
                            <RequestDetails
                                onDelete={deleteRequest}
                                progressStatus={selection.status}
                                requestMessage={selection.requestMessage}
                                tableData={selection.helpers}
                                _id={selection._id}
                                columns={orderTableColumns}
                            />
                        )}
                    </RequestDetailsWrapper>
                }
            </DesktopView>

            <MobileView>
                <RequestList>
                    <OrderCardMobile
                        orders={data.data}
                        // className={order && order.id === active ? 'active' : ''}
                        columns={orderTableColumns}
                        onClick={setSelection}
                    />
                </RequestList>
            </MobileView>
        </RequestBox>
    );
};

export default RequestContent;
