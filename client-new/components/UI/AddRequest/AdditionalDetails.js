import React, {useState} from 'react';
import {InputContainer, PhotoUploadContainer} from "../profile/ProfileSetting.css";
import {Button, Label} from "../profile/forms/label";
import {Input, MessageBox} from "../profile/forms/input";
import {Container, Heading} from "./BasicInformation";
import styled from 'styled-components'
import {useLoginForm} from "../Auth/useForm";
import PhotoUpload from "../../UploadComponent/PhotoUpload";
import {emptyValue} from "../Auth/helper";
import Toast from "light-toast";
import {UploadImagesToCloud} from "../Auth/SelectComponent";
import axios from "axios";
import {JSONConfig, PUBLIC_URL_API} from "../../config";
import {useRouter} from "next/router";
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const AdditionalDetails = (
    {prev,inputs, handleInputChange, setDefaultValues}
) => {
    const router=useRouter()
    const [profile, setProfile] = useState( [])
    const onSubmit=async ()=>{
        const imageLink = await UploadImagesToCloud(profile)
        if (imageLink.success === false) {
            return Toast.fail('Profile Picture uploading failed, Try again')
        }
        if (!emptyValue(inputs.runFor)) {
            return Toast.fail('Please re-check your value for Volume')
        }
        if (!emptyValue(inputs.requestMessage)) {
            return Toast.fail('Please re-check your value for District')
        }
        const image=imageLink.images.length > 0 ? imageLink.images[0]:null
        const {name, email, district, bloodType, phone, password, age,runFor,volume,requestMessage,hospitalName} = inputs
        try {
            const res = await axios.post(`${PUBLIC_URL_API}/api/help/req`, {
                name, email, district, bloodType, phone, password, age,runFor,volume,image,requestMessage,hospitalName}, JSONConfig);

            Toast.success(`A request has been created with a name of ${res.data.data.name} `)
            await router.push('/requests')

        } catch (err) {
            Toast.fail(err.response.data.error)

        }

    }
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
                    Hospital Name
                </Label>
                <Input
                    type='text'
                    label='Hospital Name'
                    placeholder='Hospital Name'
                    name='hospitalName'
                    value={inputs.hospitalName}
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
                    onSubmit
                }>
                    Submit
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default AdditionalDetails;