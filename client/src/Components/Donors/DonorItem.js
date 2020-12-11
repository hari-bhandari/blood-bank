import React from 'react';
import {Container,CoverPhoto,Profile,Button} from './DonorItemCSS'
const DonorItem = () => {
    return (
        <Container>
            <CoverPhoto><Profile
                src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/></CoverPhoto>
            <div className="profile-name">Beni Smith</div>
            <p className="about">User Interface Designer and<br/>front-end developer</p>
            <Button>Hey</Button>
            <Button>Hey</Button>
        </Container>
    );
};

export default DonorItem;