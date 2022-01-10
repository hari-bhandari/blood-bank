import React from 'react';
import Layout from "../../components/UI/layout";
import Profile from "../../components/UI/profile/Profile";

const Index = () => {
    return (
        <Layout title={"My Profile"} >
            <Profile index={1}/>
        </Layout>
    );
};

export default Index;