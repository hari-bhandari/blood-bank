import React from 'react';
import {Meta, OrderListHeader, OrderMeta, SingleOrderList, Status, TrackID,} from './order-card.style';



const OrderCard= ({
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
            <SingleOrderList onClick={onClick} className={className}>
                <OrderListHeader>
                    <TrackID>
                        Request
                        <span> #{orderId.slice(0,8)}</span>
                    </TrackID>
                    <Status>{succeeded?'✅':'❌'} </Status>
                </OrderListHeader>

                <OrderMeta>
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
                            {amount}L
            </span>
                    </Meta>
                </OrderMeta>
            </SingleOrderList>
        </>
    );
};

export default OrderCard;
