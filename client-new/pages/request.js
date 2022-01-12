import React from 'react';
import Layout from "../components/UI/layout";
import AddRequest from "../components/UI/AddRequest/AddRequest";

const Request = () => {
    return (
        <Layout title={" Request for blood"} initialShadow={true}>
            <AddRequest/>
        </Layout>
    );
};

export default Request;