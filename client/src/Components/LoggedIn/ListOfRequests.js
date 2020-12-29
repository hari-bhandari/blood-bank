import React from 'react';
import DonorCard from "../DonorCard";
import axios from "axios";
import {useQuery} from "react-query";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";

const ListOfRequests = () => {
    const fetchRequests = async () => {
        const response = await axios(
            `/api/auth/getMyRequests`
        );
        return response.data.data;
    }
    const { status, data } = useQuery("id", fetchRequests, {
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
                <DonorCard request={request}/>
                )
            )}

        </div>
    );
};

export default ListOfRequests;