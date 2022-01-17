import React from 'react';
import RequestPageSection from "../../components/UI/RequestPage/RequestPage";
import Layout from "../../components/UI/layout";
import axios from "axios";
import {PUBLIC_URL_API} from "../../components/config";
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
            <Layout title={ 'Blood Bank'}  initialShadow={true}>
                <div style={{margin:"150px 50px auto 50px"}}>
                    <h2>
                    Thank You for confirming your email
                    </h2>
                </div>
            </Layout>)
    }
    return (
        <Custom404/>
    );
};

export async function getServerSideProps({params}) {
    const data = await fetchData(`${PUBLIC_URL_API}/api/auth/confirmemail?token=${params.slug}`).then(data => data.user
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