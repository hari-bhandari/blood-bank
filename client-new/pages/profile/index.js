import React, {useEffect} from 'react';
import Layout from "../../components/UI/layout";
import Profile from "../../components/UI/profile/Profile";
import {useRouter} from "next/router";
import authContext from "../../components/Context/auth/authContext";

const Index = () => {
    const {isAuthenticated}=authContext;
    const router=useRouter()
    useEffect(()=>{
        if(!isAuthenticated){
            router.push('/')
        }
    },[isAuthenticated])
    return (
        <Layout title={"My Profile"} >
            <Profile index={1}/>
        </Layout>
    );
};

export default Index;