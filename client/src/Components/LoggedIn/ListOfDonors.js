import React from 'react';
import DonorCard from "../DonorCard";
import axios from "axios";
import {useQuery} from "react-query";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";
import {toast} from "react-toastify";
import {useParams} from "react-router";

const ListOfDonors = () => {
    const {id}=useParams()
    const fetchRequests = async () => {
        const response = await axios(
            `/api/help/getMyDonors/${id}`
        );
        return response.data.data;
    }
    let { status, data } = useQuery("id", fetchRequests, {
        refetchAllOnWindowFocus: false
    });
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
                    <DonorCard request={request} donor={true}/>
                )
            )}
        </div>
    );
};
export default ListOfDonors