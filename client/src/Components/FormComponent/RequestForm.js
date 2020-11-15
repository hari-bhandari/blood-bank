import React, {useContext, useEffect} from 'react';
import './RequestForm.css'
import {useForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";
const RequestForm = () => {
    const authContext=useContext(AuthContext);
    const {user}=authContext;
    const[values,handleChange]=useForm()
    useEffect(()=>{
    },[])
    return (
        <div className="card-form">
            <form className="signup" >
                <div className="form-title">Request for a blood</div>
                <div className="form-body">
                    <div className="row">
                        <input type="text" placeholder="Name" required name="name" value={values.name} onChange={handleChange}/>
                        <input type="text" placeholder="Blood Type" name="bloodType" value={values.bloodType} onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="City" required name="city" value={values.city} onChange={handleChange}/>
                        <input type="text" placeholder="Hospital Name" name="hospitalName" value={values.hospitalName} onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Email Address*" name="email" value={values.email} onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Phone Number" name="phone" value={values.phone} onChange={handleChange}/>
                    </div>
                </div>
                <div className="rule"></div>
                <div className="form-footer">
                    <a>Sign Me Up!<span className="fa fa-thumbs-o-up"></span></a>
                    <a>Not Now!<span className="fa fa-ban"></span></a>
                </div>
            </form>
        </div>
    );
};

export default RequestForm;