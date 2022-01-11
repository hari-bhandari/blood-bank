import React from 'react';
import Table from 'rc-table';
import {
  Address,
  CostCalculation,
  DeliveryAddress,
  DeliveryInfo,
  OrderTable,
  OrderTableWrapper,
  Price,
  PriceRow,
  ProgressWrapper,
} from './order-details.style';



const components = {
  table: OrderTable,
};

const OrderDetails = ({
  tableData,
  columns,
  address,
  subtotal,
  discount,
  deliveryFee,
  grandTotal,
}) => {
  const CURRENCY='£'
  return (
    <>
      {/*<DeliveryInfo>*/}
      {/*  <DeliveryAddress>*/}
      {/*    <h3>*/}
      {/*      Delivery Address*/}
      {/*    </h3>*/}
      {/*    <Address>{address.address1}</Address>*/}
      {/*    <Address>{address.address2}</Address>*/}
      {/*    <Address>{address.county}</Address>*/}
      {/*    <Address><b>{address.postcode}</b></Address>*/}
      {/*  </DeliveryAddress>*/}

      {/*  <CostCalculation>*/}
      {/*    <PriceRow>*/}
      {/*      Sub total*/}
      {/*      <Price>*/}
      {/*        {CURRENCY}*/}
      {/*        {subtotal}*/}
      {/*      </Price>*/}
      {/*    </PriceRow>*/}
      {/*    <PriceRow>*/}
      {/*      Discount*/}
      {/*      <Price>*/}
      {/*        {CURRENCY}*/}
      {/*        {discount}*/}
      {/*      </Price>*/}
      {/*    </PriceRow>*/}
      {/*    <PriceRow>*/}
      {/*      Delivery Fee*/}
      {/*      <Price>*/}
      {/*        {CURRENCY}*/}
      {/*        {deliveryFee}*/}
      {/*      </Price>*/}
      {/*    </PriceRow>*/}
      {/*    <PriceRow className="grandTotal">*/}
      {/*      Total*/}
      {/*      <Price>*/}
      {/*        {CURRENCY}*/}
      {/*        {grandTotal}*/}
      {/*      </Price>*/}
      {/*    </PriceRow>*/}
      {/*  </CostCalculation>*/}
      {/*</DeliveryInfo>*/}


      <OrderTableWrapper>
        {/*<Table*/}
        {/*  columns={columns}*/}
        {/*  data={tableData}*/}
        {/*  rowKey={(record) => record._id}*/}
        {/*  components={components}*/}
        {/*  className="orderDetailsTable"*/}
        {/*  // scroll={{ y: 350 }}*/}
        {/*/>*/}
      </OrderTableWrapper>
    </>
  );
};

export default OrderDetails;
