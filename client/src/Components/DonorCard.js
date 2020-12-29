import React from 'react';
import './Card.css'

const DonorCard = ({help,name,district,email,hospitalName,bloodType,phone}) => {

    return (
        <div className="card">

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
                <button id="cancel" type="button">More Info</button>

            </div>

        </div>
    );
};

export default DonorCard;