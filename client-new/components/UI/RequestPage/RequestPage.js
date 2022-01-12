import React, {useContext,useState} from 'react';
import {ProfilePageCSS} from "./RequestPage.styles";
import axios from "axios";
import {toast} from "react-toastify";
import AuthContext from "../../Context/auth/authContext";
import {PUBLIC_URL_API} from "../../config";
import {transformCloudinaryImage} from "../Requests/Donors/DonorCard";
import {FaHandsHelping} from "react-icons/fa";

const ProfilePage = ({data}) => {
    const[error,setError]=useState()
    const offerHelp=async ()=>{
        try {
            await axios.post(`/api/auth/offer/${data._id}`);
        }catch (e){
            setError(e.response.data.error)
        }
    }
    // const onClick=async ()=>{
    //     if(isAuthenticated){
    //         await offerHelp()
    //         if(!error){
    //             toast.success("You have offered the help from your part!Thank You!", {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         }
    //         else {
    //             toast.warn(error, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         }
    //
    //     }
    //     else {
    //         toast.warn("You must be logged in to offer help. Why not signup?", {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //     }
    // }
    // if(status==='loading'){
    //     return (
    //         <CentralizeDiv>
    //             <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
    //         </CentralizeDiv>
    //     )
    // }

    return (
        <ProfilePageCSS>
            {/*<ImageModal open={open} imageLink={transformCloudinaryImage(data.image)} setOpen={setOpen}/>*/}
            <div className="wrapper" >
                <div className="left">
                    <img onClick={()=>{}} src={transformCloudinaryImage(data.image)}
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
                                <h4>Travel Cost</h4>
                                <p>{data.travel?'Travel costs will be paid by requester':'Travel costs will not be paid by requester'}</p>
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
                    <div className={"offer-help-container"} onClick={()=>{}}><FaHandsHelping size={"3em"}></FaHandsHelping> Offer A Help</div>

                </div>
            </div>
        </ProfilePageCSS>

    );
};

export default ProfilePage;