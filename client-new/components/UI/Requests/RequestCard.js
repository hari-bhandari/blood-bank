import React from 'react';
import {CardContainer,Flex} from "./RequestCard.style";
import {FaHospital,FaLocationArrow,FaMoneyBill,FaMailBulk} from "react-icons/fa";
import Link from 'next/link'
import {BloodType} from "./Donors/DonorCard.css";
import {transformCloudinaryImage} from "./Donors/DonorCard";
const RequestCard = ({donor,ref}) => {
    return (
        <CardContainer ref={ref}>
            <BloodType position={'10%'}>{donor?.bloodType}</BloodType>
            <img
                src={transformCloudinaryImage(donor?.image,150,150,'.webp')}
                alt="Person" className="card__image"/>
            <p className="card__name">{donor.name}</p>
            <Flex justify={"space-between"}>
                <div className="grid-child-posts">
                    <FaHospital/> {donor.hospitalName}
                </div>
                <div className="grid-child-posts">
                    <FaLocationArrow/> {donor.district.charAt(0).toUpperCase() + donor.district.slice(1)}
                </div>
            </Flex>

            <p className="card__description">
                <FaMoneyBill/> They will  cover your travel and required expenses
            </p>
            <p className="card__description">
                <FaMailBulk/>{donor.email}
            </p>



            <button className="btn-request draw-border">9841921783</button>
            <Link href={`/requests/${donor._id}`}>
                <button className="btn-request draw-border">Learn More</button>
            </Link>

        </CardContainer>
    );
};

export default RequestCard;