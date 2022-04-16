import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {BloodType, Button, ButtonContainer, Container, CoverPhoto, Profile} from './DonorCard.css'
import {SpinnerInfinity} from "spinners-react";
import Toast from "light-toast";
import axios from "axios";
import {PUBLIC_URL_API} from "../../../config";
import AuthContext from "../../../Context/auth/authContext";
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

export const transformCloudinaryImage = (url, width, height, imgFormat) => {
    if (!url) {
        return 'https://res.cloudinary.com/wisecart/image/upload/v1641925984/depositphotos_247872612-stock-illustration-no-image-available-icon-vector_s4yb2t.jpg'
    }
    if (!url.includes('cloudinary')) {
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
const DonorItemInsider = ({donor, buttonClickLoading, setButtonClickLoading}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;
    const [email, setEmail] = useState(null)
    const [emailLoading, setEmailLoading] = useState(false)
    const [phone, setPhone] = useState(null)
    const [phoneLoading, setPhoneLoading] = useState(false)
    const {executeRecaptcha} = useGoogleReCaptcha();
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return false;
        }

        const token = await executeRecaptcha(donor._id);
        console.log({token})
        return token ? true : false;
        // Do whatever you want with the token
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    const getButtonText = (buttonType) => {
        if (buttonType === 'email') {
            if (!email && !emailLoading) {
                return 'Tap to reveal email'
            }
            if (emailLoading) {
                return ''
            }
            if (email) {
                return email
            }
        }
        if (buttonType === 'phone') {
            if (!phone && !phoneLoading) {
                return 'Tap to reveal phone'
            }
            if (phoneLoading) {
                return ''
            }
            if (phone) {
                return phone
            }
        }
    }
    const getEmail = async () => {
        if (!isAuthenticated) {
            Toast.fail('You must be logged in to view details')
        } else {

                if (await handleReCaptchaVerify()) {

                    setButtonClickLoading(true)
                    setEmailLoading(true)

                    try {
                        const {data} = await axios.get(
                            `${PUBLIC_URL_API}/api/donors/email/${donor._id}`)
                        setEmail(data.data)

                    } catch (error) {
                        Toast.fail(error.response.data.error)
                    }
                    setEmailLoading(false)
                    setButtonClickLoading(false)

                } else {
                    setEmailLoading(false)
                    setButtonClickLoading(false)
                }
        }
    }
    const getPhone = async () => {
        if (!isAuthenticated) {
            Toast.fail('You must be logged in to view details')
        } else {

                if (await handleReCaptchaVerify()) {
                    setButtonClickLoading(true)
                    setPhoneLoading(true)
                    try {
                        const {data} = await axios.get(
                            `${PUBLIC_URL_API}/api/donors/phone/${donor._id}`)
                        setPhone(data.data)

                    } catch (error) {
                        Toast.fail(error.response.data.error)
                    }
                    setPhoneLoading(false)
                    setButtonClickLoading(false)

                }
                else{
                    setPhoneLoading(false)
                    setButtonClickLoading(false)
                }
            }
        }
        return (
            <Container>
                <BloodType>{donor.bloodType}</BloodType>
                <CoverPhoto><Profile
                    src={transformCloudinaryImage(donor?.image, 120, 120, '.webp')}
                />
                </CoverPhoto>
                <div className="profile-name">{donor.name}</div>
                <p className="about">District: <b>{donor.district.charAt(0).toUpperCase() + donor.district.slice(1)}</b></p>
                <ButtonContainer>
                    <Button onClick={getPhone}>{getButtonText('phone')}
                        {phoneLoading && <SpinnerInfinity height={'10px'}/>}</Button>
                    <Button onClick={getEmail}>{getButtonText('email')}
                        {emailLoading && <SpinnerInfinity height={'10px'}/>}</Button>
                </ButtonContainer>
            </Container>

        );
    };

    const DonorCard = (props) => {
        return (
            <GoogleReCaptchaProvider reCaptchaKey="6LfexXofAAAAAAxy6WBvQRzz5uySf7EEgDFcO6Bd">
                <DonorItemInsider {...props} />
            </GoogleReCaptchaProvider>
        );
    };

    export default DonorCard;
