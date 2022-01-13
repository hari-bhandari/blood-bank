import React, {useContext, useEffect} from 'react';
import Layout from "../components/UI/layout";
import AddRequest from "../components/UI/AddRequest/AddRequest";
import AuthContext from "../components/Context/auth/authContext";
import {useRouter} from "next/router";

const Request = () => {
    const authContext=useContext(AuthContext);
    const {isAuthenticated}=authContext;
    const router=useRouter()
    useEffect(()=>{
        if(!isAuthenticated){
            router.push('/')
        }
    },[isAuthenticated])
    return (
        <Layout title={" Request for blood"} initialShadow={true}>
            <AddRequest/>
        </Layout>
    );
};

export default Request;