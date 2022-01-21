import React from 'react';
import {Container,CoverPhoto,Profile,Button,BloodType,ButtonContainer} from './DonorCard.css'


export const transformCloudinaryImage = (url, width, height, imgFormat) => {
    if (!url){
        return 'https://res.cloudinary.com/wisecart/image/upload/v1641925984/depositphotos_247872612-stock-illustration-no-image-available-icon-vector_s4yb2t.jpg'
    }
    if (!url.includes('cloudinary')){
        return url
    }
    // https://res.cloudinary.com/wisecart/image/upload/w_150,h_300,c_fill/v1617441971/re3lf0beoxdrw4hdqbeb.png
    let [first, last] = url.split('/upload/') //splits the url at /upload/ and returns an array
    if (imgFormat) {
        const imageFormat = last.substring(last.lastIndexOf('.') + 1, last.length) || null
        // console.log({imageFormat,last})
        if (imageFormat) {
            last = last.replace(`.${imageFormat}`, imgFormat)

        }
    }
    return first + `/upload/e_trim/c_lpad,w_${width},h_${height}/` + last
}
const DonorItem = ({donor}) => {
    return (
        <Container>
            <BloodType>{donor.bloodType}</BloodType>
            <CoverPhoto><Profile
                src={transformCloudinaryImage(donor?.image,120,120,'.webp')}
            />
            </CoverPhoto>
            <div className="profile-name">{donor.name}</div>
            <p className="about">District: <b>{donor.district.charAt(0).toUpperCase() + donor.district.slice(1)}</b><br/>Email: <b>{donor.email}</b></p>
            <ButtonContainer>
            <Button>{donor.phone}</Button>
            <Button>{donor.email}</Button>
            </ButtonContainer>
            {/*<Link href={`/user/${donor?._id}`}><Button>More Info</Button> </Link>*/}
        </Container>
    );
};

export default DonorItem;