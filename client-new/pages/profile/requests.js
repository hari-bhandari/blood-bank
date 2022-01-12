import React from 'react';
import Layout from "../../components/UI/layout";
import Profile from "../../components/UI/profile/Profile";

const Requests = () => {
    return (
        <Layout title={"My Profile"} >
            <Profile index={0}/>
        </Layout>
    );
};

export default Requests;