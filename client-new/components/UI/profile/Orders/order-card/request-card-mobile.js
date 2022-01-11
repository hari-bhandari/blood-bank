import React from 'react';
import Table from 'rc-table';
import Collapse, {Panel} from 'rc-collapse';
import {
    Address,
    CardWrapper,
    DeliveryAddress,
    DeliveryInfo,
    Meta,
    RequestDetail,
    OrderListHeader,
    RequestMeta,
    OrderTable,
    RequestTableMobile,
    Status,
    TrackID,
} from './request-card.style';
import dateFormat from 'dateformat'



const components = {
  table: OrderTable,
};

const OrderCard= ({
                                                     onClick,
                                                     className,
                                                     columns,
                                                     progressData,
                                                     orders,
                                                   }) => {

  return (
      <>
        <Collapse
            accordion={true}
            className={`accordion ${className}`}
            defaultActiveKey="active"
        >
          {orders.map((order) => {
            const created=new Date(order.createdAt)
            const createdTime=dateFormat(created,"HH:MM")
            const createdDate=dateFormat(created,"dddd, mmmm dS, yyyy")
                return (
                    <Panel
                        header={
                            <CardWrapper onClick={() => onClick?.(order)}>
                                <OrderListHeader>
                                    <TrackID>
                                        Request <span>#{order._id.slice(0,8)}</span>
                                    </TrackID>
                                    <Status>{order?.active ? '✅' : '❌'}</Status>
                                </OrderListHeader>

                                <RequestMeta>
                                    <Meta>
                                        Date: <span>{createdDate}</span>
                              </Meta>
                              <Meta>
                                Requested Time: <span>{createdTime}</span>
                              </Meta>
                              <Meta className="price">
                                Volume Needed:
                                <span>
                                  {order.volume} ML
                    </span>
                              </Meta>
                            </RequestMeta>
                          </CardWrapper>
                        }
                        headerClass="accordion-title"
                        key={order._id}
                    >
                      <RequestDetail>
                        <DeliveryInfo>
                          <DeliveryAddress>
                            <h3>Request Message</h3>
                            <Address>{order?.message}</Address>
                          </DeliveryAddress>

                        </DeliveryInfo>


                        <RequestTableMobile>
                          <Table
                              columns={columns}
                              data={order.helpers}
                              rowKey={(record) => record.id}
                              components={components}
                              scroll={{ x: 450 }}
                              // scroll={{ y: 250 }}
                          />
                        </RequestTableMobile>
                      </RequestDetail>
                    </Panel>
                )
              }
          )}
        </Collapse>
      </>
  );
};

export default OrderCard;
