import React from 'react';
import RequestPageSection from "../../components/UI/RequestPage/RequestPage";
import Layout from "../../components/UI/layout";
import axios from "axios";
import {PUBLIC_URL_API} from "../../components/config";
import {useRouter} from "next/router";
import Custom404 from "../404";

const fetchData = (url) => axios.get(url)
    .then(res => ({
        error: false,
        data: res.data.data,
    }))
    .catch(() => ({
            error: true,
            data: null,
        }),
    );

const RequestPage = ({data}) => {
    if (data) {
        return (
            <Layout title={data.name+ ' | Blood Bank'} description={data.requestMessage} initialShadow={true}>
                <RequestPageSection data={data}/>
            </Layout>)
    }
    return (
        <Custom404/>
    );
};

export async function getServerSideProps({params}) {
    const data = await fetchData(`${PUBLIC_URL_API}/api/help/${params.slug}`).then(data => data.data
    ).catch((error) => {
        return {
            props: {
                success: false
            }
        }
    })
    return {
        props: {
            success: true,
            data,
        },
    };
}

export default RequestPage;