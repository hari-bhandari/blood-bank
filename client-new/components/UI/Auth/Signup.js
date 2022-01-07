import React, {useContext, useEffect, useState} from 'react';
import {useLoginForm} from "./useForm";
import {districts, bloodType, turnIntoSelectFormat} from "../data";
import SelectComponent from "./SelectComponent";
import {QueryContainer} from "./QueryFormCss";
import AuthContext from "../../Context/auth/authContext";
import {FaLock, FaPhone, FaUser, FaEnvelope,FaMale} from "react-icons/fa";

const Signup = () => {
    const authContext = useContext(AuthContext);
    const {register, isAuthenticated} = authContext;
    const districtOptions = turnIntoSelectFormat(districts)
    const bloodOptions = turnIntoSelectFormat(bloodType)
    const {inputs, handleInputChange, handleInputChangeManually,handleInputForCheckbox} = useLoginForm()
    const [active,setActive]=useState(0)
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
            {active==0?
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
                <input  type="number" placeholder="Age" name="age" value={inputs.age} onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="input-field signup-input">
                <i><FaLock/></i>
                <input name="password" type="password" placeholder="Password"  value={inputs.password} onChange={(e) => handleInputChange(e)}/>
            </div>

            <div className="queryBox">
                    <SelectComponent options={bloodOptions} isMulti={false} onChange={handleChangeForBlood} defaultLabel={"Blood Type"}/>
            </div>
            <div className="queryBox">
                <SelectComponent options={districtOptions} isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"District"}/>
            </div>
            <p className="signup-agreement"><input type="checkbox" value={inputs.shareInformation} name={'shareInformation'} onChange={handleInputForCheckbox}/>Please tick this box if you want to publicly share your number and help patients find you easily </p>
            </>:<div>

                </div>}
            <input type="submit" className="btn" value="Sign up"/>
        </form>
    );
};

export default Signup;