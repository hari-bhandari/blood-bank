import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Text from '../../elements/Text';
import Heading from '../../elements/Heading';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import {Testimonial} from './data';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Container from '../../Container';
import GlideCarousel from '../../../components/GlideCarousel';
import GlideSlide from '../../../components/GlideCarousel/glideSlide';
import TestimonialSectionWrapper, {ClientName, ImageWrapper, RoundWrapper, TextWrapper,} from './Quotes.styles';

const Quotes = ({
                                sectionSubTitle,
                                btnWrapperStyle,
                                commentStyle,
                                nameStyle,
                                btnStyle,
                                designationStyle,
                            }) => {
    // Glide js options
    const glideOptions = {
        type: 'carousel',
        autoplay: 4000,
        perView: 1,
    };

    return (
        <TestimonialSectionWrapper id="testimonial_section">
            <Container>
                <Text content="Why should we donate blood?" {...sectionSubTitle} />
                <GlideCarousel
                    options={glideOptions}
                    buttonWrapperStyle={btnWrapperStyle}
                    nextButton={
                        <Button
                            icon={<FaArrowRight color={'white'}/>}
                            variant="textButton"
                            {...btnStyle}
                        />
                    }
                    prevButton={
                        <Button
                            icon={<FaArrowLeft color={'white'}/>}
                            variant="textButton"
                            {...btnStyle}
                        />
                    }
                >
                    <Fragment>
                        {Testimonial.map((item, index) => (
                            <GlideSlide key={index}>
                                <Fragment>
                                    <TextWrapper>
                                        <i className="flaticon-quotes" />
                                        <Text content={item.comment} {...commentStyle} />
                                        <ClientName>
                                            <Heading content={item.name} {...nameStyle} />
                                            <Heading
                                                content={item.designation}
                                                {...designationStyle}
                                            />
                                        </ClientName>
                                    </TextWrapper>
                                    <ImageWrapper>
                                        <RoundWrapper>
                                            <Image src={item.avatar_url} alt="Client Image" />
                                        </RoundWrapper>
                                    </ImageWrapper>
                                </Fragment>
                            </GlideSlide>
                        ))}
                    </Fragment>
                </GlideCarousel>
            </Container>
        </TestimonialSectionWrapper>
    );
};

// TestimonialSection style props
Quotes.propTypes = {
    sectionHeader: PropTypes.object,
    sectionTitle: PropTypes.object,
    sectionSubTitle: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    btnStyle: PropTypes.object,
    btnWrapperStyle: PropTypes.object,
    nameStyle: PropTypes.object,
    commentStyle: PropTypes.object,
    designationStyle: PropTypes.object,
};

// TestimonialSection default style
Quotes.defaultProps = {
    // sub section default style
    sectionSubTitle: {
        as: 'span',
        display: 'block',
        fontSize: '14px',
        letterSpacing: '0.15em',
        fontWeight: '700',
        color: '#5268db',
        mb: '20px',
        ml: 'auto',
        mr: 'auto',
        pl: '12px',
        maxWidth: '954px',
    },
    // client comment style
    commentStyle: {
        color: '#0f2137',
        fontWeight: '400',
        fontSize: ['22px', '22px', '22px', '30px'],
        lineHeight: '1.72',
        mb: '47px',
    },
    // client name style
    nameStyle: {
        as: 'h3',
        color: '#343d48',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '30px',
        mb: 0,
    },
    // client designation style
    designationStyle: {
        as: 'h5',
        color: 'rgba(52, 61, 72, 0.8)',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '30px',
        mb: 0,
        ml: ['0', '10px'],
    },
    // glide slider nav controls style
    btnWrapperStyle: {
        position: 'absolute',
        bottom: '62px',
        left: '12px',
    },
    // next / prev btn style
    btnStyle: {
        minWidth: 'auto',
        minHeight: 'auto',
        mr: '13px',
        fontSize: '16px',
        color: '#343d484d',
    },
};

export default Quotes;
