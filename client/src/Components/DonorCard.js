import React from 'react';
import './CardCSS'
import {Link} from "react-router-dom";
import {CardContainer} from "./CardCSS";
import {FaTimesCircle} from "react-icons/all";

const DonorCard = ({request,deleteRequest,donor}) => {
    return (
        <CardContainer>
            {!donor&&(<FaTimesCircle  onClick={()=>{deleteRequest(request.id)}} className={"X"}/>)}

            <div className="content-container">
                <p className="donor__title">{request.name}</p>
                <p className="content">
                    District: {request.district}
                </p>
                <p className="content">
                    {!donor?`Hospital Name:${request.hospitalName}`:`Phone Number:${request.phone}`}

                </p>
            </div>
            <div className="content-container">
                <p className="donor__title">Blood Type:{request.bloodType}</p>
                <p className="content">
                    Email:{request.email}
                </p>

            </div>
            <div className="content-container">
                {!donor&&<Link to={`/requests/${request._id}`}><button id="accept" type="button">Available Donors</button></Link>}
                {!donor&&<Link to={`/changePhoto/${request._id}`}><button id="changePhoto" type="button">Change Photo</button></Link>}
                <Link to={donor?`/user/${request._id}`:`/help/${request.id}`}> <button id="cancel" type="button">More Info</button> </Link>

            </div>

        </CardContainer>
    );
};

export default DonorCard;