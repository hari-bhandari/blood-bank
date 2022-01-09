import React from 'react';
import Layout from "../components/UI/layout";
import Auth from "../components/UI/Auth/Auth";
const Login = () => {
    return (
        <Layout title={"Signup | BloodBank"} description={"Sign up to save lives or request for blood"}>
            <Auth login={false}/>
        </Layout>
    );
};

export default Login;