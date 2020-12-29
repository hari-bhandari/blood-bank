import React,{useEffect} from 'react';
import DonorCard from "../DonorCard";
import axios from "axios";
import {useQuery} from "react-query";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";
import {toast} from "react-toastify";

const ListOfRequests = () => {
    const fetchRequests = async () => {
        const response = await axios(
            `/api/auth/getMyRequests`
        );
        return response.data.data;
    }
    let { status, data,refetch } = useQuery("id", fetchRequests, {
        refetchAllOnWindowFocus: false
    });
    const deleteRequest=async (id)=>{
        try {
            const ok=window.confirm("Do you want to delete the request you made?")
            if (ok){
                const res=await axios.delete(`/api/help/delete/${id}`);
                await refetch();
                toast.success(res.data.data, {
                    position: "top-center",
                    autoClose: 80000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        } catch (err) {
            toast.error(err?.response?.data?.error, {
                position: "top-center",
                autoClose: 80000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    if(status==='loading'){
        return (
            <CentralizeDiv>
                <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
            </CentralizeDiv>
        )
    }
    return (
        <div>
            {data.map(request=>(
                <DonorCard request={request} deleteRequest={deleteRequest}/>
                )
            )}

        </div>
    );
};

export default ListOfRequests;