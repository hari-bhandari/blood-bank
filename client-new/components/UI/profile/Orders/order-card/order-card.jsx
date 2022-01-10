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
                        Order
                        <span>#{orderId}</span>
                    </TrackID>
                    <Status>{succeeded?'✅':'❌'} </Status>
                </OrderListHeader>

                <OrderMeta>
                    <Meta>
                        Order Date
                        : <span>{date}</span>
                    </Meta>
                    <Meta>
                        Created Time
                        : <span>{createdTime}</span>
                    </Meta>
                    <Meta className="price">
                        Total Price
                        :
                        <span>
              {'£'}
                            {amount}
            </span>
                    </Meta>
                </OrderMeta>
            </SingleOrderList>
        </>
    );
};

export default OrderCard;
