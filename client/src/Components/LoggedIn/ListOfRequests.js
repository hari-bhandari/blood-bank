import React from 'react';
import DonorCard from "../DonorCard";
import axios from "axios";
import {useQuery} from "react-query";

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
    return (
        <div>
            {data.map(request=>(
                <DonorCard phone={request.phone} bloodType={request.bloodType} email={request.email} name={request.name} district={request.district} hospitalName={data.hospitalName}/>
                )
            )}

        </div>
    );
};

export default ListOfRequests;