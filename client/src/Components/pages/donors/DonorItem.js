import React from 'react';
import {Container,CoverPhoto,Profile,Button,BloodType} from './DonorItemCSS'
import {Link} from "react-router-dom";
import {getSizedImageURL} from "../../sharedUtils/utils";
const DonorItem = ({donor}) => {
    return (
        <Container>
            <BloodType>{donor.bloodType}</BloodType>
            <CoverPhoto><Profile
                src={getSizedImageURL(donor?.image,200,200)}/></CoverPhoto>
            <div className="profile-name">{donor.name}</div>
            <p className="about">District:{donor.district.charAt(0).toUpperCase() + donor.district.slice(1)}<br/>Email:{donor.email}</p>
            <Button>{donor.phone}</Button>
            <Link to={`/user/${donor._id}`}><Button>More Info</Button> </Link>
        </Container>
    );
};

export default DonorItem;