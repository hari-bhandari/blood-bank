import React, {useContext} from 'react';
import styled from "styled-components";
import {InputContainer} from "../profile/ProfileSetting.css";
import {Button, Label} from "../profile/forms/label";
import {Input} from "../profile/forms/input";
import SelectComponent from "../Auth/SelectComponent";
import {bloodType, districts, turnIntoSelectFormat} from "../data";
import authContext from "../../Context/auth/authContext";
import {emptyValue} from "../Auth/helper";
import Toast from "light-toast";
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
const BasicInformation = ({next,inputs, handleInputChange, setDefaultValues, handleInputChangeManually}) => {
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
    const nextStep=()=>{
        if (!emptyValue(inputs.name)) {
            return Toast.fail('Please re-check your value for Name')
        }
        if (!emptyValue(inputs.phone.replace('+977', ''))) {
            return Toast.fail('Please re-check your value for Phone')
        }
        if (!emptyValue(inputs.age)) {
            return Toast.fail('Please re-check your value for Age')
        }
        if (!emptyValue(inputs.email)) {
            return Toast.fail('Please re-check your value for email')
        }
        if (!emptyValue(inputs.volume)) {
            return Toast.fail('Please re-check your value for Volume')
        }
        if (!emptyValue(inputs.district)) {
            return Toast.fail('Please re-check your value for District')
        }
        if (!emptyValue(inputs.bloodType)) {
            return Toast.fail('Please re-check your value for BloodType')
        }
        next()
    }
    return (
        <Container>
            <Heading>Make a blood request</Heading>
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
                    Patient&apos;s age
                </Label>
                <Input
                    type='number'
                    name='age'
                    label="Patient's age"
                    placeholder="Patient's age"
                    value={inputs.age}
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
                    name='volume'
                    value={inputs.volume}
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
                <SelectComponent options={districtOptions} height={55}  isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"District"} />
            </InputContainer>
            <InputContainer>
                <Label>
                    Your Blood Type
                </Label>
                <SelectComponent options={bloodOptions}  height={55}  isMulti={false} onChange={handleChangeForBlood} defaultLabel={"BloodType"} />
            </InputContainer>
            <ButtonContainer>
                <Button size='big' style={{width: '40%'}} onClick={nextStep}
                 >
                    Next
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default BasicInformation;