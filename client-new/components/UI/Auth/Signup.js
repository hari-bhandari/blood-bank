import React, {useContext, useState} from 'react';
import {useLoginForm} from "./useForm";
import {bloodType, districts, turnIntoSelectFormat} from "../data";
import SelectComponent, {UploadImagesToCloud} from "./SelectComponent";
import AuthContext from "../../Context/auth/authContext";
import {FaEnvelope, FaLock, FaMale, FaPhone, FaUser} from "react-icons/fa";
import PhotoUpload from "../../UploadComponent/PhotoUpload";
import {emptyValue} from "./helper";
import Toast from "light-toast";
import {useRouter} from "next/router";
import {PhotoUploadContainer} from "../profile/ProfileSetting.css";
import {ButtonContainer} from "../AddRequest/BasicInformation";
import axios from "axios";
import {JSONConfig, PUBLIC_URL_API} from "../../config";

const Signup = () => {
    const authContext = useContext(AuthContext);
    const {register, loadUser} = authContext;
    const districtOptions = turnIntoSelectFormat(districts)
    const bloodOptions = turnIntoSelectFormat(bloodType)
    const {inputs, handleInputChange, handleInputChangeManually, handleInputForCheckbox} = useLoginForm()
    const [step, setStep] = useState(0)
    const [profile, setProfilePicture] = useState([])
    const router = useRouter()


    const onRegister = async (e) => {
        e.preventDefault()
        if (step === 0) {
            if (!emptyValue(inputs.name)) {
                return Toast.fail('Please re-check your value for Name')
            }
            if (!emptyValue(inputs.phone.replace('+977', ''))) {
                return Toast.fail('Please re-check your value for Phone')
            }
            if (!emptyValue(inputs.age)) {
                return Toast.fail('Please re-check your value for Age')
            }
            if (!emptyValue(inputs.password)) {
                return Toast.fail('Please re-check your value for Password')
            }
            setStep(1)

        } else {
            Toast.loading()
            const imageLink = await UploadImagesToCloud(profile)
            if (imageLink.success === false) {
                return Toast.fail('Profile Picture uploading failed, Try again')
            }
            if (!emptyValue(inputs.district)) {
                return Toast.fail('Please re-check your value for Password')
            }
            if (!emptyValue(inputs.bloodType)) {
                return Toast.fail('Please re-check your value for Password')
            }
            const {name, email, district, bloodType, phone, password,age, shareInformation} = inputs
            try {
                const {data} = await axios.post(
                    `${PUBLIC_URL_API}/api/auth/register`,
                    {
                        name, email, district, bloodType, phone, password,age,
                        image: imageLink.images.length > 0 ? imageLink.images[0] : null, shareInformation
                    },
                    JSONConfig
                )
                register(data)
                localStorage.setItem('token', JSON.stringify(data.token))
                await loadUser()
                Toast.success('Successfully logged in')
            } catch (error) {
                Toast.fail(error.response.data.error)
            } finally {
                Toast.hide()
            }

        }
    }
    const handleChangeForBlood = selectedOption => {
        handleInputChangeManually("bloodType", selectedOption.value)
    };
    const handleChangeForDistrict = selectedOption => {
        handleInputChangeManually("district", selectedOption.value)
    };

    return (
        <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            {step == 0 ?
                <>
                    <div className="input-field signup-input">
                        <i><FaPhone/></i>
                        <input id="phone" name="phone" type="phone" placeholder="Phone Number" value={inputs.phone} onChange={handleInputChange}/>
                    </div>
                    <div className="input-field signup-input">
                        <i><FaUser/></i>
                        <input id="name" name="name" type="text" placeholder="Full Name" value={inputs.name} onChange={handleInputChange}/>
                    </div>
                    <div className="input-field signup-input">
                        <i><FaEnvelope/></i>
                        <input name="email" type="email" placeholder="Email" value={inputs.email} onChange={handleInputChange}/>
                    </div>
                    <div className="input-field signup-input">
                        <i><FaMale/></i>
                        <input type="number" placeholder="Age" name="age" value={inputs.age} onChange={handleInputChange}/>
                    </div>
                    <div className="input-field signup-input">
                        <i><FaLock/></i>
                        <input name="password" type="password" placeholder="Password" value={inputs.password} onChange={(e) => handleInputChange(e)}/>
                    </div>


                </> : <>
                    <PhotoUploadContainer background={'rgba(255, 176, 0, 0.3)'}>
                        <PhotoUpload withIcon={false}
                                     withPreview={true}
                                     setImages={setProfilePicture}
                                     singleImage={true}
                                     label={"Please select your profile picture (note:This is an optional step) "}
                                     buttonText={"Choose your profile picture"}
                                     maxFiles={1}/>
                    </PhotoUploadContainer>
                    <div className="queryBox">
                        <SelectComponent options={bloodOptions} height={55} borderRadius={'15px'} isMulti={false} onChange={handleChangeForBlood} defaultLabel={"Blood Type"}/>
                    </div>
                    <div className="queryBox">
                        <SelectComponent options={districtOptions} height={55} borderRadius={'15px'} isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"District"}/>
                    </div>
                    <p className="signup-agreement"><input type="checkbox" value={inputs.shareInformation} name={'shareInformation'} onChange={handleInputForCheckbox}/>Please tick this box if you want to publicly share your number and help patients find you easily </p>

                </>}
            <ButtonContainer>
                {step == 1 && <input type="submit" onClick={()=>{setStep(step-1)}} className="btn" value={'Previous'}/>}
                <input type="submit" onClick={onRegister} className="btn" value={step == 1 ? 'Sign Up' : 'Next'}/>
            </ButtonContainer>
        </form>
    );
};

export default Signup;