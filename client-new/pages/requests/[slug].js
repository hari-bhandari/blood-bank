import React from 'react';
import {useRouter} from "next/router";
import RequestPageSection from "../../components/UI/RequestPage/RequestPage";
import Layout from "../../components/UI/layout";
const RequestPage = () => {
    const {query} = useRouter()

    return (
        <Layout>
            <RequestPageSection id={query.slug}/>
        </Layout>
    );
};

export default RequestPage;