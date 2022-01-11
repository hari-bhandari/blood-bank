import React, {useContext} from 'react';
import styled from "styled-components";
import {useLoginForm} from "../Auth/useForm";
import {InputContainer} from "../profile/ProfileSetting.css";
import {Button, Label} from "../profile/forms/label";
import {Input} from "../profile/forms/input";
import SelectComponent from "../Auth/SelectComponent";
import {bloodType, districts, turnIntoSelectFormat} from "../data";
import authContext from "../../Context/auth/authContext";
export const Container=styled.div`
  background-color: rgb(255, 255, 255);
  padding: 30px 30px 20px;
  position: relative;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 16px 0px;
`
export const Heading=styled.div`
  font-family: sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: rgb(13, 17, 54);
  margin-bottom: 15px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const BasicInformation = ({next}) => {
    const {inputs, handleInputChange, setDefaultValues, handleInputChangeManually} = useLoginForm();
    const districtOptions = turnIntoSelectFormat(districts)
    const bloodOptions = turnIntoSelectFormat(bloodType)
    const auth = useContext(authContext);
    const {loadUser, user} = auth;
    const handleChangeForBlood = selectedOption => {
        handleInputChangeManually("bloodType", selectedOption.value)
    };
    const handleChangeForDistrict = selectedOption => {
        handleInputChangeManually("district", selectedOption.value)
    };
    return (
        <Container>
            <Heading>Basic Info</Heading>
            <InputContainer>
                <Label>
                   Patient Name
                </Label>
                <Input
                    type='text'
                    label='Full Name'
                    placeholder='Full Name'
                    name='name'
                    value={inputs.name}
                    onChange={handleInputChange}
                    backgroundColor='#F7F7F7'
                    height='48px'
                    // intlInputLabelId="profileNameField"
                />

            </InputContainer>

            <InputContainer>
                <Label>
                    Your phone Number
                </Label>
                <Input
                    type='text'
                    label='Phone Number'
                    placeholder='Phone Number'
                    name='phone'
                    value={inputs.phone}
                    onChange={handleInputChange}
                    backgroundColor='#F7F7F7'
                    height='48px'
                    // intlInputLabelId="profileNameField"
                />
            </InputContainer>
            <InputContainer>
                <Label>
                    Your Email
                </Label>
                <Input
                    type='email'
                    name='email'
                    label='Email Address'
                    placeholder='Email Address'
                    value={inputs.email}
                    onChange={handleInputChange}
                    backgroundColor='#F7F7F7'
                    // intlInputLabelId="profileEmailField"
                />
            </InputContainer>
            <InputContainer>
                <Label>
                    Blood Volume Needed (in ML)
                </Label>
                <Input
                    type='number'
                    label='Blood Volume Needed (in ML)'
                    name='name'
                    value={inputs.name}
                    onChange={handleInputChange}
                    backgroundColor='#F7F7F7'
                    height='48px'
                    placeholder={"Blood Volume Needed (in ML)"}
                />
            </InputContainer>
            <InputContainer>
                <Label>
                    Your District
                </Label>
                <SelectComponent options={districtOptions} height={55}  isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"District"} value={inputs.district}/>
            </InputContainer>
            <InputContainer>
                <Label>
                    Your Blood Type
                </Label>
                <SelectComponent options={bloodOptions}  height={55}  isMulti={false} onChange={handleChangeForBlood} defaultLabel={"BloodType"} value={inputs.bloodType}/>
            </InputContainer>
            <ButtonContainer>
                <Button size='big' style={{width: '40%'}} onClick={
                    next
                } >
                    Next
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default BasicInformation;