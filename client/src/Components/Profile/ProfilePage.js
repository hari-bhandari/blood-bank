import React from 'react';
import {ProfilePageCSS} from "./ProfilePageCss";
import {useParams} from "react-router";
import axios from "axios";
import {useQuery} from "react-query";
import {SpinnerInfinity} from "spinners-react";
import {CentralizeDiv} from "../../util/CentralizeDiv";

const ProfilePage = () => {
    const {id}=useParams()
    const fetchDonors = async () => {
        const response = await axios(
            `/api/help/${id}`
        );
        return response.data.data;
    }
    const { status, data } = useQuery(id, fetchDonors, {
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
        <ProfilePageCSS>
            <div className="profile-user-page card">
                <div className="img-user-profile">
                    <div className="profile-bgHome"
                         />
                    <img className="avatar" src="http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200"
                         alt="jofpin"/>
                </div>
                <button>Offer Help</button>
                <div className="user-profile-data">
                    <h1>{data?.name}</h1>
                    <p>We need your help. We really do!!</p>
                </div>
                <div className="description-profile">{data.message}
                </div>
                <ul className="data-user">
                    <li><a><strong>{data.phone}</strong><span>Phone</span></a></li>
                    <li><a><strong>{data.hospitalName}</strong><span>Hospital Name</span></a></li>
                    <li><a><strong>{data.bloodType}</strong><span>Blood Type</span></a></li>
                </ul>
            </div>
        </ProfilePageCSS>

    );
};

export default ProfilePage;