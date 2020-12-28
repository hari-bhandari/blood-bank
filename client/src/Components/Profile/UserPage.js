import React, {useContext,useState} from 'react';
import {ProfilePageCSS} from "./ProfilePageCss";
import {useParams} from "react-router";
import axios from "axios";
import {useQuery} from "react-query";
import {SpinnerInfinity} from "spinners-react";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import AuthContext from "../../Context/auth/authContext";

const UserPage = () => {
    const authContext=useContext(AuthContext);
    const {login,isAuthenticated,loadUser}=authContext;
    const[error,setError]=useState()

    const {id}=useParams()
    const fetchDonors = async () => {
        const response = await axios(
            `/api/donors/${id}`
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

                    <div className="More Info">
                        <div className="projects_data">
                            <div className="data">
                                <h4>District Name</h4>
                                <p>{data.district}</p>
                            </div>
                            <div className="data">
                                <h4>User creation Date</h4>
                                <p>{data.createdAt.slice(0,10)}</p>
                            </div>
                        </div>
                    </div>

                        <div className={"offer-help-container"}></div>

                </div>
            </div>
        </ProfilePageCSS>

    );
};

export default UserPage;