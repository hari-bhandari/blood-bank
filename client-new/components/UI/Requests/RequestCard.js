import React from 'react';
import {CardContainer, Info, InfoContainer} from "./RequestCard.style";
import {FaMountain} from "react-icons/fa";
import {MdLocalHospital, MdLocationOn, MdMarkEmailRead, MdPersonPinCircle} from "react-icons/md";
import Link from 'next/link'
import {BloodType} from "./Donors/DonorCard.css";
import {transformCloudinaryImage} from "./Donors/DonorCard";

const RequestCard = ({donor, ref}) => {
    return (
        <CardContainer ref={ref}>
            <BloodType position={'10%'}>{donor?.bloodType}</BloodType>
            <img
                src={transformCloudinaryImage(donor?.image, 150, 150, '.webp')}
                alt="Person" className="card__image"/>
            <p className="card__name">{donor.name}</p>
            <InfoContainer>
                <Info width={'40%'} right={false}>
                    <span><MdLocalHospital/> Hospital</span>
                    <span> {donor.hospitalName}</span>
                </Info>
                <Info width={'30%'} right={true}>
                    <span><FaMountain/> Quantity</span>
                    <span>
                     {donor.volume} ml</span>
                </Info>
                <Info  width={'30%'} right={true}>
                    <span><MdLocationOn/> District</span>
                    <span>
                     {donor.district.charAt(0).toUpperCase() + donor.district.slice(1)}</span>
                </Info>
            </InfoContainer>
            <InfoContainer>
                <Info  width={'70%'} right={false}>
                    <span><MdMarkEmailRead/> Email</span>
                    <a href={`mailto: ${donor.email}`}>
                     <b>{donor.email}</b>
                    </a>
                </Info>
                <Info  width={'30%'} right={true}>
                    <span><MdPersonPinCircle/> Age</span>
                        {donor.age}
                </Info>
            </InfoContainer>
            <button className="btn-request draw-border">9841921783</button>
            <Link href={`/requests/${donor._id}`}>
                <button className="btn-request draw-border">More Info</button>
            </Link>

        </CardContainer>
    );
};

export default RequestCard;