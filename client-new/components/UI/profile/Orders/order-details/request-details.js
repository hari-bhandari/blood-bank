import React from 'react';
import Table from 'rc-table';
import {EditContainer, Message, RequestMessage, RequestTable, RequestTableWrapper,} from './request-details.style';
import {Button} from "../../forms/label";


const components = {
  table: RequestTable,
};

const RequestDetails = ({
  tableData,
  columns,
  requestMessage,onDelete,_id
}) => {
  return (
    <>
      <EditContainer>
        <RequestMessage>
          <Button onClick={()=>{onDelete(_id)}}>Delete request</Button>
          <Button style={{margin:'25px 0'}}>Edit request</Button>
          <h3>
            Request Message
          </h3>
          <Message>{requestMessage}</Message>
        </RequestMessage>

      </EditContainer>


      <RequestTableWrapper>
        Please contact these people as they have offered you the blood
        <Table
          columns={columns}
          data={tableData}
          rowKey={(record) => record._id}
          components={components}
          className="orderDetailsTable"
          // scroll={{ y: 350 }}
        />
      </RequestTableWrapper>
    </>
  );
};

export default RequestDetails;
