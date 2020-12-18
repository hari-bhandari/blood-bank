import React from 'react';
import {useForm} from "./useForm";
import QueryForm from "../Donors/QueryForm";
import {districts,bloodType,turnIntoSelectFormat} from "../utils/sharedData";
import SelectComponent from "../query/SelectComponent";
import {QueryContainer} from "../Donors/QueryFormCss";

const Signup = () => {
    const districtOptions=turnIntoSelectFormat(districts)
    const bloodOptions=turnIntoSelectFormat(bloodType)
    const [valuesForSignup,handleChangeForSignup]=useForm()
    const handleChangeForBlood = selectedOption => {
        console.log('hey')
    };

    return (
        <form  className="sign-up-form" >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-phone" style={{marginLeft:"20px"}}>+977</i>
                <input style={{paddingLeft:"30px"}} id="number" name="number" type="number" placeholder="Phone Number" value={valuesForSignup.number} onChange={handleChangeForSignup}/>
            </div>
            <div className="input-field">
                <i className="fas fa-user"/>
                <input id="name" name="name" type="text" placeholder="Full Name" value={valuesForSignup.name} onChange={handleChangeForSignup}/>
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"/>
                <input name="email" type="email" placeholder="Email" value={valuesForSignup.email} onChange={handleChangeForSignup} />
            </div>

            <div className="input-field">
                <i className="fas fa-lock"/>
                <input name="password"  type="password" placeholder="Password" name="password" value={valuesForSignup.password} onChange={handleChangeForSignup}/>
            </div>

            <div className="queryBox">
                <QueryContainer>
                <SelectComponent options={bloodOptions} isMulti={false}  onChange={handleChangeForBlood} defaultLabel={"Search by blood type..."}/>
                <SelectComponent options={bloodOptions} isMulti={false}  onChange={handleChangeForBlood} defaultLabel={"Search by blood type..."}/>
                </QueryContainer>

            </div>
            <p className="signup-agreement">By signing up,You're accepting to show your contact information and blood group to people in need</p>
            <input type="submit" className="btn" value="Sign up" />
        </form>
    );
};

export default Signup;