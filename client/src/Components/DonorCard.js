import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";


const DonorCard = ({request,deleteRequest,donor}) => {
    return (
        <div className="card">
            {!donor&&(<span className={"X"} onClick={()=>{deleteRequest(request.id)}}>X</span>)}
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
                <Link to={donor?`/user/${request._id}`:`/help/${request.id}`}> <button id="cancel" type="button">More Info</button> </Link>

            </div>

        </div>
    );
};

export default DonorCard;