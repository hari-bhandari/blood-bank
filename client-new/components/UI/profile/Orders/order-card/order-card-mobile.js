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


type MobileOrderCardProps = {
  orderId?: any;
  onClick?: (e: any) => void;
  className?: any;
  status?: any;
  date?: any;
  deliveryTime?: any;
  amount?: number;
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: string;
  subtotal?: number;
  discount?: number;
  deliveryFee?: number;
  grandTotal?: number;
  orders?: any;
};

const components = {
  table: OrderTable,
};

const OrderCard: React.FC<MobileOrderCardProps> = ({
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
          {orders.map((order: any) => {
            const created=new Date(order.created)
            const createdTime=dateFormat(created,"HH:MM")
            const createdDate=dateFormat(created,"dddd, mmmm dS, yyyy")
                return (
                    <Panel
                        header={
                            <CardWrapper onClick={() => onClick?.(order)}>
                                <OrderListHeader>
                                    <TrackID>
                                        Order <span>#{order._id}</span>
                                    </TrackID>
                                    <Status>{order?.isPaid ? '✅' : '❌'}</Status>
                                </OrderListHeader>

                                <OrderMeta>
                                    <Meta>
                                        Order Date: <span>{createdDate}</span>
                              </Meta>
                              <Meta>
                                Order Time: <span>{createdTime}</span>
                              </Meta>
                              <Meta className="price">
                                Total Price:
                                <span>
                      £
                                  {order.totalPrice}
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
                            <h3>Delivery Address</h3>
                            <Address>{order.shippingAddress.address1}</Address>
                            <Address>{order.shippingAddress.address2}</Address>
                            <Address><b>{order.shippingAddress.postcode}</b></Address>
                          </DeliveryAddress>

                          <CostCalculation>
                            <PriceRow>
                              Subtotal
                              <Price>
                                £
                                {order.totalPrice}
                              </Price>
                            </PriceRow>
                            <PriceRow>
                              Discount
                              <Price>
                                £
                                {0}
                              </Price>
                            </PriceRow>
                            <PriceRow>
                              Delivery Fee
                              <Price>
                                £
                                {order.shippingPrice}
                              </Price>
                            </PriceRow>
                            <PriceRow className="grandTotal">
                              Total
                              <Price>
                                £
                                {order.totalPrice}
                              </Price>
                            </PriceRow>
                          </CostCalculation>
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
