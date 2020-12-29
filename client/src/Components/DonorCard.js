import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";

const DonorCard = ({help,name,district,email,hospitalName,bloodType,phone,id}) => {

    return (
        <div className="card">
            <span className={"X"}>X</span>

            <div className="content-container">
                <p className="donor__title">{name}</p>
                <p className="content">
                    District: {district}
                </p>
                <p className="content">
                    Hospital Name:{hospitalName}
                </p>
            </div>
            <div className="content-container">
                <p className="donor__title">Blood Type:{bloodType}</p>
                <p className="content">
                    Email:{email}
                </p>

            </div>
            <div className="content-container">
                <button id="accept" type="button">Available Donors</button>
                <Link to={`/help/${id}`}> <button id="cancel" type="button">More Info</button> </Link>

            </div>

        </div>
    );
};

export default DonorCard;