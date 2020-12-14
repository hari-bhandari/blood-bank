import React from 'react';
import {Container,CoverPhoto,Profile,Button,BloodType} from './DonorItemCSS'
const DonorItem = ({donor}) => {
    return (
        <Container>
            <BloodType>{donor.bloodType}</BloodType>
            <CoverPhoto><Profile
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/></CoverPhoto>
            <div className="profile-name">{donor.name}</div>
            <p className="about">District:{donor.district.charAt(0).toUpperCase() + donor.district.slice(1)}<br/>Email:{donor.email}</p>
            <Button>{donor.phone}</Button>
            <Button>More Info</Button>
        </Container>
    );
};

export default DonorItem;