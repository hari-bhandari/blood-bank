import React from 'react';
import {ProfilePageCSS} from "./ProfilePageCss";
import {useParams} from "react-router";
import axios from "axios";
import {useQuery} from "react-query";
import {SpinnerInfinity} from "spinners-react";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import {toast} from "react-toastify";
import {FaHandsHelping} from "react-icons/all";

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
    const onClick=()=>{
        toast.warn("You must be logged in to offer help. Why not signup?", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if(status==='loading'){
        return (
            <CentralizeDiv>
                <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
            </CentralizeDiv>
        )
    }

    return (
        <ProfilePageCSS>
            <div className="wrapper">
                <div className="left">
                    <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                         alt="user" width="100"/>
                        <h4>{data.name}
                        </h4>
                        <p>{data.bloodType}</p>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>Information</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Email</h4>
                                <p>{data.email}</p>
                            </div>
                            <div className="data">
                                <h4>Phone</h4>
                                <p>{data.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="More details">
                        <h3>Message</h3>
                        <div className="data">
                            <p>{data.message}</p>
                        </div>
                        <div className="projects_data">

                        </div>
                    </div>
                    <div className="More Info">
                        <h3>Projects</h3>
                        <div className="projects_data">
                            <div className="data">
                                <h4>Hospital Name</h4>
                                <p>{data.hospitalName}</p>
                            </div>
                            <div className="data">
                                <h4>Travel Cost</h4>
                                <p>{data.travel?'Travel costs will be paid by requester':'Travel costs will not be paid by requester'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="social_media">
                        <ul>
                            <li><FaHandsHelping/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </ProfilePageCSS>

    );
};

export default ProfilePage;