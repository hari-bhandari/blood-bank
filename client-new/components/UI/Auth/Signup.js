import React, {useContext, useEffect, useState} from 'react';
import {useLoginForm} from "./useForm";
import {districts, bloodType, turnIntoSelectFormat} from "../data";
import SelectComponent from "./SelectComponent";
import AuthContext from "../../Context/auth/authContext";
import {FaLock, FaPhone, FaUser, FaEnvelope, FaMale} from "react-icons/fa";
import PhotoUpload from "../../UploadComponent/PhotoUpload";

const Signup = () => {
    const authContext = useContext(AuthContext);
    const {register, isAuthenticated} = authContext;
    const districtOptions = turnIntoSelectFormat(districts)
    const bloodOptions = turnIntoSelectFormat(bloodType)
    const {inputs, handleInputChange, handleInputChangeManually, handleInputForCheckbox} = useLoginForm()
    const [step, setStep] = useState(0)
    const [profile, setProfilePicture] = useState([])
    const onClick = () => {
        if (step === 0) {
            setStep(1)
        } else {

        }
    }
    useEffect(() => {
        if (isAuthenticated) {
            // props.history.push('/')
        }
    }, [])
    const onRegister = (e) => {
        e.preventDefault()
        register(inputs)
    }

    const handleChangeForBlood = selectedOption => {
        handleInputChangeManually("bloodType", selectedOption.value)
    };
    const handleChangeForDistrict = selectedOption => {
        handleInputChangeManually("district", selectedOption.value)
    };

    return (
        <form className="sign-up-form" onSubmit={onRegister}>
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
                        <input type="number" placeholder="Age" name="age" value={inputs.age} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="input-field signup-input">
                        <i><FaLock/></i>
                        <input name="password" type="password" placeholder="Password" value={inputs.password} onChange={(e) => handleInputChange(e)}/>
                    </div>


                </> : <>
                    <PhotoUpload withIcon={false}
                                 withPreview={true}
                                 setImages={setProfilePicture}
                                 singleImage={true}
                                 label={"Please select your profile picture (note:This is an optional step) "}
                                 buttonText={"Choose your profile picture"}
                                 maxFiles={1}/>
                    <div className="queryBox">
                        <SelectComponent options={bloodOptions} height={55} borderRadius={'15px'} isMulti={false} onChange={handleChangeForBlood} defaultLabel={"Blood Type"}/>
                    </div>
                    <div className="queryBox">
                        <SelectComponent options={districtOptions} height={55} borderRadius={'15px'}   isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"District"}/>
                    </div>
                    <p className="signup-agreement"><input type="checkbox" value={inputs.shareInformation} name={'shareInformation'} onChange={handleInputForCheckbox}/>Please tick this box if you want to publicly share your number and help patients find you easily </p>

                </>}
            <input type="submit" className="btn" onClick={onClick} value={step == 1 ? 'Sign Up' : 'Next'}/>
        </form>
    );
};

export default Signup;