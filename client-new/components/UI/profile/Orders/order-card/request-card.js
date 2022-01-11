import React from 'react';
import {Meta, OrderListHeader, RequestMeta, SingleRequestList, Status, TrackID,} from './request-card.style';



const RequestCard= ({
                                                 orderId,
                                                 onClick,
                                                 className,
                                                 succeeded,
                                                 date,
                                                 createdTime,
                                                 amount,
                                             }) => {
    return (
        <>
            <SingleRequestList onClick={onClick} className={className}>
                <OrderListHeader>
                    <TrackID>
                        Request
                        <span> #{orderId.slice(0,8)}</span>
                    </TrackID>
                    <Status>{succeeded?'✅':'❌'} </Status>
                </OrderListHeader>

                <RequestMeta>
                    <Meta>
                        Date
                        :
                        <span>{date}</span>
                    </Meta>
                    <Meta>
                        Request Time
                        : <span>{createdTime}</span>
                    </Meta>
                    <Meta className="price">
                        Volume Needed
                        :
                        <span>
                            {amount}ML
            </span>
                    </Meta>
                </RequestMeta>
            </SingleRequestList>
        </>
    );
};

export default RequestCard;
