import React, {useContext, useEffect, useState} from 'react';
import {ProfilePageCSS} from "./RequestPage.styles";
import axios from "axios";
import {transformCloudinaryImage} from "../Requests/Donors/DonorCard";
import {FaHandsHelping} from "react-icons/fa";
import {ShareSocial} from 'react-share-social'
import Toast from "light-toast";
import AuthContext from "../../Context/auth/authContext";
import {PUBLIC_URL_API} from "../../config";
const style = {
    margin:'auto',
    width:"80%",
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const ProfilePage = ({data}) => {
    const authContext=useContext(AuthContext);
    const {isAuthenticated}=authContext;
    const [url,setUrl]=useState('https://bloodbanknp.com')
    useEffect(()=>{
        if (typeof window !== "undefined") {
            setUrl(window.location.href)
        }
    })
    const offerBlood=async ()=>{
        if(isAuthenticated) {
            try {
                const res = await axios.post(`${PUBLIC_URL_API}/api/auth/offer/${data._id}`);
                console.log(res.data)
                Toast.success(res.data.data)
            } catch (e) {
                console.log(e)
                Toast.fail(e.response.data.error)
            }
        }
        else{
            Toast.fail('Please login or signup to offer your blood')
        }
    }
    return (
        <ProfilePageCSS>
            <div className="wrapper" >
                <div className="left">
                    <img onClick={()=>{}} src={transformCloudinaryImage(data.image,500,500,'.webp')}
                         alt="user" width="100"/>
                    <h4>{data.name}</h4>
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
                        <h3>Request Message</h3>
                        <div className="data">
                            <p>{data.requestMessage}</p>
                        </div>
                        <div className="projects_data">


                        </div>
                    </div>
                    <div className="More Info">
                        <div className="projects_data">
                            <div className="data">
                                <h4>Hospital Name</h4>
                                <p>{data.hospitalName}</p>
                            </div>
                            <div className="data">
                                <h4>Age</h4>
                                <p>{data.age}</p>
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
                                <h4>Date Requested</h4>
                                <p>{data.createdAt.slice(0,10)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"offer-help-container"} onClick={offerBlood}>
                        <FaHandsHelping size={"3em"} style={{marginRight:'20px'}}/> Offer A Help</div>

                </div>
            </div>
            <ShareSocial
                style={style}
                url ={url}
                socialTypes={['facebook','twitter','reddit','linkedin']}
            />
        </ProfilePageCSS>

    );
};

export default ProfilePage;