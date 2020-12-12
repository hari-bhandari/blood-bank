import React from 'react';
import {Container,CoverPhoto,Profile,Button,BloodType} from './DonorItemCSS'
const DonorItem = () => {
    return (
        <Container>
            <BloodType>A+</BloodType>
            <CoverPhoto><Profile
                src="https://haribhandari.me/static/bbfbed4a006f12cc6ec59b3f42d010d5/b3cab/me.jpg"/></CoverPhoto>
            <div className="profile-name">Beni Smith</div>
            <p className="about">District:Baglung<br/>Full Address:Hatiya Baglung</p>
            <Button>9841921783</Button>
            <Button>More Info</Button>
        </Container>
    );
};

export default DonorItem;