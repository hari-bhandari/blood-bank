import React, {useContext, useEffect} from 'react';
import {useLoginForm} from "./useForm";
import {districts, bloodType, turnIntoSelectFormat} from "./data";
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
            <div className="input-field">
                <i><FaPhone/></i>
                <input id="phone" name="phone" type="phone" placeholder="Phone Number" value={inputs.phone} onChange={handleInputChange}/>
            </div>
            <div className="input-field">
                <i><FaUser/></i>
                <input id="name" name="name" type="text" placeholder="Full Name" value={inputs.name} onChange={handleInputChange}/>
            </div>
            <div className="input-field">
                <i><FaEnvelope/></i>
                <input name="email" type="email" placeholder="Email" value={inputs.email} onChange={handleInputChange}/>
            </div>
            <div className="input-field">
                <i><FaMale/></i>
                <input  type="number" placeholder="Age" name="age" value={inputs.age} onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="input-field">
                <i><FaLock/></i>
                <input name="password" type="password" placeholder="Password"  value={inputs.password} onChange={(e) => handleInputChange(e)}/>
            </div>

            <div className="queryBox">
                <QueryContainer>
                    <SelectComponent options={bloodOptions} isMulti={false} onChange={handleChangeForBlood} width={130} defaultLabel={"Blood Type"}/>
                    <SelectComponent options={districtOptions} isMulti={false} onChange={handleChangeForDistrict} width={200} defaultLabel={"District"}/>
                </QueryContainer>

            </div>
            
            <p className="signup-agreement"><input type="checkbox" value={inputs.shareInformation} name={'shareInformation'} onChange={handleInputForCheckbox}/>Please tick this box if you want to share your information publicly with other users within this site! </p>
            <input type="submit" className="btn" value="Sign up"/>
        </form>
    );
};

export default Signup;