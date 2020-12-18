import React from 'react';
import {CardContainer} from "./RequestCardCSS";
import {BloodType} from '../Donors/DonorItemCSS'
import {FaHospital,FaLocationArrow,FaMoneyBill,FaMailBulk} from "react-icons/all";
import {Link} from "react-router-dom";

const RequestCard = ({donor}) => {
    return (
        <CardContainer>
            <BloodType position={'10%'}>A+</BloodType>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                    alt="Person" className="card__image"/>
                    <p className="card__name">{donor.name}</p>
                    <div className="grid-container">
                        <div className="grid-child-posts">
                            <FaHospital/> {donor.hospitalName}
                        </div>
                        <div className="grid-child-posts">
                            <FaLocationArrow/> {donor.district}
                        </div>

                        <p className="card__description">
                            <FaMoneyBill/> They will  cover your travel and required expenses
                        </p>
                        <p className="card__description">
                            <FaMailBulk/>{donor.email}
                        </p>


                    </div>

                    <button className="btn-request draw-border">9841921783</button>
                    <Link to={`/help/${donor.id}`}>
                    <button className="btn-request draw-border">Learn More</button>
                    </Link>

        </CardContainer>
    );
};

export default RequestCard;