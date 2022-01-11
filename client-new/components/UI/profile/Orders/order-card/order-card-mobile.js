import React from 'react';
import Table from 'rc-table';
import Collapse, {Panel} from 'rc-collapse';
import {
    Address,
    CardWrapper,
    CostCalculation,
    DeliveryAddress,
    DeliveryInfo,
    Meta,
    OrderDetail,
    OrderListHeader,
    OrderMeta,
    OrderTable,
    OrderTableMobile,
    Price,
    PriceRow,
    ProgressWrapper,
    Status,
    TrackID,
} from './order-card.style';
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
  const statusChecker=(status)=>{
    const list=['received', 'dispatched', 'delivered']
    return list.findIndex(data=>data==status)+1
  }
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

                                <OrderMeta>
                                    <Meta>
                                        Date: <span>{createdDate}</span>
                              </Meta>
                              <Meta>
                                Requested Time: <span>{createdTime}</span>
                              </Meta>
                              <Meta className="price">
                                Volume Needed:
                                <span>
                                  {order.volume} L
                    </span>
                              </Meta>
                            </OrderMeta>
                          </CardWrapper>
                        }
                        headerClass="accordion-title"
                        key={order._id}
                    >
                      <OrderDetail>
                        <DeliveryInfo>
                          <DeliveryAddress>
                            <h3>Request Message</h3>
                            <Address>{order?.message}</Address>
                            {/*<Address>{order.shippingAddress.address2}</Address>*/}
                            {/*<Address><b>{order.shippingAddress.postcode}</b></Address>*/}
                          </DeliveryAddress>

                          {/*<CostCalculation>*/}
                          {/*  <PriceRow>*/}
                          {/*    Subtotal*/}
                          {/*    <Price>*/}
                          {/*      £*/}
                          {/*      {order.totalPrice}*/}
                          {/*    </Price>*/}
                          {/*  </PriceRow>*/}
                          {/*  <PriceRow>*/}
                          {/*    Discount*/}
                          {/*    <Price>*/}
                          {/*      £*/}
                          {/*      {0}*/}
                          {/*    </Price>*/}
                          {/*  </PriceRow>*/}
                          {/*  <PriceRow>*/}
                          {/*    Delivery Fee*/}
                          {/*    <Price>*/}
                          {/*      £*/}
                          {/*      {order.shippingPrice}*/}
                          {/*    </Price>*/}
                          {/*  </PriceRow>*/}
                          {/*  <PriceRow className="grandTotal">*/}
                          {/*    Total*/}
                          {/*    <Price>*/}
                          {/*      £*/}
                          {/*      {order.totalPrice}*/}
                          {/*    </Price>*/}
                          {/*  </PriceRow>*/}
                          {/*</CostCalculation>*/}
                        </DeliveryInfo>


                        <OrderTableMobile>
                          <Table
                              columns={columns}
                              data={order.orderItems}
                              rowKey={(record) => record.id}
                              components={components}
                              scroll={{ x: 450 }}
                              // scroll={{ y: 250 }}
                          />
                        </OrderTableMobile>
                      </OrderDetail>
                    </Panel>
                )
              }
          )}
        </Collapse>
      </>
  );
};

export default OrderCard;
