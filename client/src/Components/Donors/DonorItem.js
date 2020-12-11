import React from 'react';
import {Container,CoverPhoto,Profile,Button} from './DonorItemCSS'
const DonorItem = () => {
    return (
        <Container>
            <div className="bloodType">A+</div>
            <CoverPhoto><Profile
                src="https://haribhandari.me/static/bbfbed4a006f12cc6ec59b3f42d010d5/b3cab/me.jpg"/></CoverPhoto>
            <div className="profile-name">Beni Smith</div>
            <p className="about">User Interface Designer and<br/>front-end developer</p>
            <Button>Hey</Button>
            <Button>Hey</Button>
        </Container>
    );
};

export default DonorItem;