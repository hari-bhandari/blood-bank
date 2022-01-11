import React, {useState} from 'react';
import {InputContainer, PhotoUploadContainer} from "../profile/ProfileSetting.css";
import {Button, Label} from "../profile/forms/label";
import {Input, MessageBox} from "../profile/forms/input";
import SelectComponent from "../Auth/SelectComponent";
import {Container, Heading} from "./BasicInformation";
import styled from 'styled-components'
import {useLoginForm} from "../Auth/useForm";
import PhotoUpload from "../../UploadComponent/PhotoUpload";
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const AdditionalDetails = (
    {prev}
) => {
    const {inputs, handleInputChange, setDefaultValues, handleInputChangeManually} = useLoginForm();
    const [profile, setProfile] = useState( [])
    return (
        <Container>
            <Heading>Basic Info</Heading>
            <PhotoUploadContainer background={'white'}>
                <PhotoUpload withIcon={false}
                             withPreview={true}
                             setImages={setProfile}
                             defaultImages={profile}
                             singleImage={true}
                             label={"Add an image to your request"}
                             buttonText={"Upload Image"}
                             maxFiles={1}/>
            </PhotoUploadContainer>
            <InputContainer>
                <Label>
                    Run this request for (in days)
                </Label>
                <Input
                    type='number'
                    label='Run this request for (in days)'
                    placeholder='Run this request for (in days)'
                    name='runFor'
                    value={inputs.runFor}
                    onChange={handleInputChange}
                    backgroundColor='#F7F7F7'
                    height='48px'
                    // intlInputLabelId="profileNameField"
                />

            </InputContainer>
            <InputContainer>
                <Label>
                    Request Message
                </Label>
                <MessageBox
                    type='text'
                    label='Message'
                    placeholder='Request Message'
                    name='requestMessage'
                    value={inputs.requestMessage}
                    onChange={handleInputChange}
                    backgroundColor='#F7F7F7'
                    height='48px'
                    // intlInputLabelId="profileNameField"
                />
            </InputContainer>
            <ButtonContainer>
                <Button size='big' style={{width: '40%'}} onClick={
                    prev
                }>
                    Prev
                </Button>
                <Button size='big' style={{width: '40%'}} onClick={
                    ()=>{}
                }>
                    Submit
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default AdditionalDetails;