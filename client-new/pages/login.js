import React from 'react';
import Layout from "../components/UI/layout";
import Auth from "../components/UI/Auth/Auth";
const Login = () => {
    return (
        <Layout title={"Login | BloodBank"} description={"Sign in to save lives or request for blood"}>
            <Auth login={true}/>
        </Layout>
    );
};

export default Login;