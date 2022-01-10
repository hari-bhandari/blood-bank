import React, {useContext, useEffect, useState} from 'react';
import {Label,Button} from "./forms/label";
import {Input} from "./forms/input";
import {
    FormContainer,
    HeadingSection,
    InputContainer, PhotoUploadContainer,
    SettingsForm,
    SettingsFormContent,
    Title
} from './ProfileSetting.css';
import {useLoginForm} from "../Auth/useForm";
import axios from "axios";
import {PUBLIC_URL_API,JSONConfig} from "../../config";
import Toast from "light-toast";
import authContext from "../../Context/auth/authContext";
import PhotoUpload from "../../UploadComponent/PhotoUpload";


const SettingsContent= ( ) => {
    const auth = useContext(authContext);
    const { loadUser,user} = auth;
    const {inputs, handleInputChange,setDefaultValues} = useLoginForm();
    const[profile,setProfile]=useState(user?.avatar)
    useEffect(()=>{
        if(user){
            setDefaultValues({
                name: user?.name,
                phone: user?.phone,
                email: user?.email
            })
        }

    },[user])
    const OnSave=async (e)=>{
        e.preventDefault()
        try {
             await axios.put(
                `${PUBLIC_URL_API}/api/auth/updatedetails`,
                {email:inputs.email, firstName:inputs.firstName,lastName:inputs.lastName},
                JSONConfig
            )
            Toast.success('Successfully changed user data')
            await loadUser()


        } catch (error) {
            Toast.fail(error.response.data.error +', Please try again')
        }
    }

    return (
        <SettingsForm>
            <SettingsFormContent>
                <HeadingSection>
                    <Title>
                        Your Profile
                    </Title>
                </HeadingSection>
                <FormContainer>
                    <PhotoUploadContainer background={'white'}>
                    <PhotoUpload withIcon={false}
                                 withPreview={true}
                                 setImages={setProfile}
                                 defaultImages={[profile]}
                                 singleImage={true}
                                 label={"Please select your profile picture (note:This is an optional step) "}
                                 buttonText={"Choose your profile picture"}
                                 maxFiles={1}/>
                    </PhotoUploadContainer>
                    <InputContainer>
                        <Label>
                            Your First Name
                        </Label>
                        <Input
                            type='text'
                            label='Full Name'
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
                            value={inputs.email}
                            onChange={handleInputChange}
                            backgroundColor='#F7F7F7'
                            // intlInputLabelId="profileEmailField"
                        />
                    </InputContainer>

                    <InputContainer>
                        <Button size='big' style={{ width: '100%' }} onClick={OnSave}>
                            Update details
                        </Button>
                    </InputContainer>
                </FormContainer>

            </SettingsFormContent>
        </SettingsForm>
    );
};

export default SettingsContent;
