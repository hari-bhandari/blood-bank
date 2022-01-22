import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '../../elements/Box';
import Container from '../../Container';
import InputGroup from '../../InputGroup';
import RadioGroup from '../../RadioGroup';
import SectionWrapper, {ContentArea, DonateButton, DonationForm, Heading,} from './donate.style';

import {CurrencyOptions, PaymentPolicy} from "./data";

const DonateSection = ({ row, col }) => {
    const [state, setState] = useState({
        price: '',
        currency: 'usd',
        policy: 'oneTime',
    });

    const handleFormData = (value, name) => {
        setState({
            ...state,
            [name]: value,
        });
    };
    const redirect=()=>{
        if (window){
            if(window.location){
                window.location.href='https://www.paypal.com/donate/?hosted_button_id=K86J7FU4QKB7Y'
            }
        }
    }

    const handleDonation = e => {
        e.preventDefault();
        setState({
            ...state,
            price: '',
        });
    };

    return (
        <SectionWrapper id="donate">
            <Container width="1260px">
                <Box className="row" {...row}>
                    <Box className="col" {...col}>
                        <ContentArea>
                            <Heading>
                                Would You like to <span>Help </span> people <span>Donate Blood </span> Across the Globe?
                            </Heading>
                       s
                        </ContentArea>
                    </Box>

                    <Box className="col" {...col}>
                        <DonationForm onSubmit={e => handleDonation(e)}>
                            <InputGroup
                                inputType="number"
                                placeholder="5.00"
                                inputValue={state.price}
                                inputOnChange={e => handleFormData(e.target.value, 'price')}
                                currency="GBP"
                                selectedValue={state.currency}
                                selectOptions={CurrencyOptions}
                                selectOnUpdate={value => handleFormData(value, 'currency')}
                            />
                            <RadioGroup
                                name="radioGroup"
                                value={state.policy}
                                items={PaymentPolicy}
                                onUpdate={value => handleFormData(value, 'policy')}
                            />
                            <DonateButton type="button" onClick={redirect}>
                                Donate Now
                            </DonateButton>
                        </DonationForm>
                    </Box>
                </Box>
            </Container>
        </SectionWrapper>
    );
};

// DonateSection style props
DonateSection.propTypes = {
    row: PropTypes.object,
    col: PropTypes.object,
    textStyle: PropTypes.object,
};

// DonateSection default style
DonateSection.defaultProps = {
    // DonateSection row default style
    row: {
        flexBox: true,
        flexWrap: 'wrap',
        ml: '-15px',
        mr: '-15px',
    },
    // DonateSection col default style
    col: {
        width: ['100%', '50%', '50%'],
        pl: '15px',
        pr: '15px',
        mb: '30px',
    },
};

export default DonateSection;