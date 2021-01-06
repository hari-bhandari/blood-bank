import React from 'react';
import DonorCard from "../../DonorCard";
import axios from "axios";
import {useQuery} from "react-query";
import {CentralizeDiv} from "../../_shared/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";
import {toast} from "react-toastify";
import PageHeader from "../../_shared/PageHeader";
import BackButton from "../../_shared/BackButton";

const ListOfRequests = (props) => {
    const fetchRequests = async () => {
        const response = await axios(
            `/api/auth/getMyRequests`
        );
        return response.data.data;
    }
    let {status, data, refetch} = useQuery("id", fetchRequests, {
        refetchAllOnWindowFocus: false
    });
    const deleteRequest = async (id) => {
        try {
            const ok = window.confirm("Do you want to delete the request you made?")
            if (ok) {
                const res = await axios.delete(`/api/help/delete/${id}`);
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
    if (status === 'loading') {
        return (
            <CentralizeDiv>
                <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47"
                                 secondaryColor="rgba(0, 0, 0, 0.44)"/>
            </CentralizeDiv>
        )
    }
    if (data?.length == 0) {
        return (
            <h1>You don't have any requests yet!</h1>
        )
    }
    return (
        <div>
            <BackButton goBack={props.history.goBack}/>
            <PageHeader>My Requests</PageHeader>
            <div style={{marginTop: "20px"}}>
                {data.map(request => (
                        <DonorCard request={request} deleteRequest={deleteRequest}/>
                    )
                )}
            </div>

        </div>
    );
};

export default ListOfRequests;