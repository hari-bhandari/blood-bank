import React, {useContext, useEffect, useState} from 'react';
import {Button, Label} from "./forms/label";
import {Input} from "./forms/input";
import {FormContainer, HeadingSection, InputContainer, PhotoUploadContainer, SettingsForm, SettingsFormContent, Title} from './ProfileSetting.css';
import {useLoginForm} from "../Auth/useForm";
import axios from "axios";
import {JSONConfig, PUBLIC_URL_API} from "../../config";
import Toast from "light-toast";
import authContext from "../../Context/auth/authContext";
import PhotoUpload from "../../UploadComponent/PhotoUpload";
import SelectComponent, {UploadImagesToCloud} from "../Auth/SelectComponent";
import {bloodType, districts, turnIntoSelectFormat} from "../data";
import {emptyValue} from "../Auth/helper";


const SettingsContent = () => {
    const districtOptions = turnIntoSelectFormat(districts)
    const bloodOptions = turnIntoSelectFormat(bloodType)
    const auth = useContext(authContext);
    const {loadUser, user} = auth;
    const {inputs, handleInputChange, setDefaultValues, handleInputChangeManually} = useLoginForm();
    const handleChangeForBlood = selectedOption => {
        handleInputChangeManually("bloodType",[selectedOption])
    };
    const handleChangeForDistrict = selectedOption => {
        handleInputChangeManually("district", [selectedOption])
    };

    const [profile, setProfile] = useState(user?.image ? [user.image] : [])
    useEffect(() => {
        if (user) {
            setDefaultValues({
                name: user?.name,
                phone: user?.phone,
                email: user?.email,
                district:districtOptions.filter(option=>option.value==user?.district),
                bloodType:bloodOptions.filter(option=>option.value==user?.bloodType)
            })
            setProfile([user.image])
        }

    }, [user])
    const OnSave = async (e) => {
        console.log({inputs})
        e.preventDefault()
        if (!emptyValue(inputs.name)) {
            return Toast.fail('Please re-check your value for Name')
        }
        if (!emptyValue(inputs.phone)) {
            return Toast.fail('Please re-check your value for Phone')
        }
        if (!emptyValue(inputs.email)) {
            return Toast.fail('Please re-check your value for Email')
        }
        if (!emptyValue(inputs.district)) {
            return Toast.fail('Please re-check your value for District')
        }
        if (!emptyValue(inputs.bloodType)) {
            return Toast.fail('Please re-check your value for BloodType')
        }
        try {
            Toast.loading("Loading...")
            let imageLink={images:[]}
            if(profile?.length>0 || profile?.files?.length>0){
                imageLink = await UploadImagesToCloud(profile)
                console.log({imageLink})
            }
            await axios.put(
                `${PUBLIC_URL_API}/api/auth/updatedetails`,
                {email: inputs.email, name: inputs.name,phone:inputs.phone,district:inputs.district[0].value,
                    bloodType:inputs.bloodType[0].value,image: imageLink.images.length > 0 ? imageLink.images[0] : null},
                JSONConfig
            )
            Toast.success('Successfully changed user data')
            await loadUser()

        } catch (error) {
            Toast.fail( + ', Please try again')
        }finally {
            Toast.hide()
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
                                     defaultImages={profile}
                                     singleImage={true}
                                     label={"Update your profile picture "}
                                     buttonText={"Update your profile picture"}
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
                        <Label>
                            Your District
                        </Label>
                        <SelectComponent options={districtOptions} height={55}  isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"District"} value={inputs.district}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Your Blood Type
                        </Label>
                        <SelectComponent options={bloodOptions} height={55}  isMulti={false} onChange={handleChangeForBlood} defaultLabel={"BloodType"} value={inputs.bloodType}/>
                    </InputContainer>
                    <InputContainer>
                        <Button size='big' style={{width: '100%'}} onClick={OnSave}>
                            Update details
                        </Button>
                    </InputContainer>

                </FormContainer>

            </SettingsFormContent>
        </SettingsForm>
    );
};

export default SettingsContent;
