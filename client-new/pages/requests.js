import React from 'react';
import Layout from "../components/UI/layout";
import RequestsSection from "../components/UI/Requests/Requests";

const Requests = () => {
    return (
        <Layout description={"All the requests made on blood bank "} title={"Requests | BloodBank"}>
            <RequestsSection/>
        </Layout>
    );
};

export default Requests;