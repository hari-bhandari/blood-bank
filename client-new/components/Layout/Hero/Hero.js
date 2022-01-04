import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../../elements/Box';
import Text from '../../elements/Text';
import Heading from '../../elements/Heading';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Fade from 'react-reveal/Fade';
import Container from '../../../components/UI/Container';
import {BannerWrapper, EmailInputWrapper} from './hero.style';
import Image from "../../elements/Image";
import BannerApp from '../../assets/image/bannerApp.png'
import BannerPlay from '../../assets/image/bannerPlay.png'
const BannerSection = ({
                           row,
                           contentArea,
                           imageArea,
                           greetingStyle,
                           aboutStyle,
                           greetingStyleTwo,
                           button,
                       }) => {
    return (
        <BannerWrapper id="banner_section">
            <Container noGutter mobileGutter width="1200px" className="container">
                <Box {...row}>
                    <Box {...contentArea} className="contentArea">
                        <Heading
                            content="No one has ever become poor by giving..."
                            {...greetingStyle}
                        />
                        <Heading content="It's in your hand. " {...greetingStyleTwo} />
                        <EmailInputWrapper>
                            <Input
                                inputType="email"
                                placeholder="Enter Email Address"
                                iconPosition="left"
                            />
                            <Link href="#fare_section">
                                <a>
                                    <Button title="Subscribe" {...button} />
                                </a>
                            </Link>
                        </EmailInputWrapper>
                        <Text
                            content="Stay up to date with our newsletter"
                            {...aboutStyle}
                        />
                        <Fade up>
                            <div className="bannerImageBtn">
                                <Link href="#1">
                                        <a>
                                            <Image
                                                src={BannerApp}
                                                className="app_image_area"
                                                alt="App Image"
                                            />
                                        </a>
                                    </Link>
                                    <Link href="#1">
                                        <a>
                                            <Image
                                                src={BannerPlay}
                                                className="play_image_area"
                                                alt="GooglePlay Image"
                                            />
                                        </a>
                                </Link>
                            </div>
                        </Fade>
                    </Box>
                </Box>
            </Container>
        </BannerWrapper>
    );
};

BannerSection.propTypes = {
    row: PropTypes.object,
    contentArea: PropTypes.object,
    imageArea: PropTypes.object,
    greetingStyle: PropTypes.object,
    nameStyle: PropTypes.object,
    designationStyle: PropTypes.object,
    aboutStyle: PropTypes.object,
    roleStyle: PropTypes.object,
    roleWrapper: PropTypes.object,
    greetingStyleTwo: PropTypes.object,
    button: PropTypes.object,
};

BannerSection.defaultProps = {
    row: {
        flexBox: true,
        flexWrap: 'wrap',
        alignItems: 'stretch',
    },
    contentArea: {
        width: ['100%', '100%', '50%', '50%'],
        p: [
            '150px 0 0px 0',
            '150px 0 0px 0',
            '150px 0 0px 0',
            '150px 0 0px 0',
            '100px 0 0px 0',
        ],
        flexBox: true,
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    imageArea: {
        width: ['100%', '100%', '50%', '50%'],
        flexBox: true,
        alignItems: 'flex-end',
        position: 'relative',
    },
    greetingStyle: {
        as: 'h1',
        color: '#15172c',
        fontSize: ['30px', '36px', '48px', '52px', '72px'],
        fontWeight: '600',
        fontFamily: 'Poppins',
        lineHeight: ['40px', '48px', '60px', '65px', '98px'],
        mb: '0px',
    },
    greetingStyleTwo: {
        as: 'h2',
        color: '#15172c',
        fontSize: ['25px', '31px', '43px', '55px', '67px'],
        fontWeight: '400',
        fontFamily: 'Poppins',
        lineHeight: ['40px', '48px', '60px', '72px', '98px'],
        mb: '8px',
    },
    roleWrapper: {
        flexBox: true,
        mb: '28px',
    },
    roleStyle: {
        as: 'h4',
        fontSize: ['18px', '18px', '18px', '18px', '20px'],
        fontWeight: '500',
        color: '#fff',
        mb: '0',
        ml: '10px',
    },
    aboutStyle: {
        fontSize: ['15px', '15px', '15px', '16px', '16px'],
        fontFamily: 'Lato',
        fontWeight: '400',
        color: '#15172c',
        lineHeight: '1.5',
        mb: '30px',
        mt: '30px',
    },
    button: {
        type: 'button',
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'Lato',
        color: '#fff',
        borderRadius: '4px',
        pl: '22px',
        pr: '22px',
        colors: 'primaryWithBg',
        minHeight: '55px',
        pt: '0px',
        pb: '0',
    },
};

export default BannerSection;
