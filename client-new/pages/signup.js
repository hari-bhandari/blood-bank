import React from 'react';
import Layout from "../components/UI/layout";
import Auth from "../components/UI/Auth/Auth";
const Login = () => {
    return (
        <Layout>
            <Auth login={false}/>
        </Layout>
    );
};

export default Login;