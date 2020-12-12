import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../../Context/auth/authContext"
import {useForm, validate} from "./useForm";
import {toast} from "react-toastify";
import {AuthGlobal} from './AuthGlobal'
import SignIn from "./SignIn";
import Signup from "./Signup";
const Auth = (props) => {
    const authContext=useContext(AuthContext);
    const {login,register,isAuthenticated,loadUser,error}=authContext;
    const [values,handleChange]=useForm()
    const [valuesForSignup,handleChangeForSignup]=useForm()
    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
    })
    useEffect(()=>{
       if(error){
           toast.error(error, {
               position: "top-center",
               autoClose: 80000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
           });
       }
    },[])
    const onLogin=(e)=>{
        e.preventDefault()
        login(values)
    }
    const onRegister=(e)=>{
        e.preventDefault()
        register(valuesForSignup)
    }
    const [Login,setLogin]=useState(true)
    const onClick=()=>{
        setLogin(!Login)
    }

    return (
        <AuthGlobal>
        <div className={`container ${Login?'':'sign-up-mode'}`}>
            <div className="forms-container">
                <div className="signin-signup" >
                <SignIn/>
                <Signup/>

                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">

                        <p className="quote-text">
                            “Donate blood and be a hero of someone’s life.”
                        </p>
                        <button className="btn transparent" onClick={onClick} id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src="https://freesvg.org/img/1533845191.png" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Why should i donate my precious blood?</h3>
                        <p className="quote-text">
                            “Donate your blood for a reason, let the reason to be life”
                        </p>
                        <button className="btn transparent" onClick={onClick} id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="https://freesvg.org/img/1533845191.png" className="image" alt="" />
                </div>
            </div>
        </div>
        </AuthGlobal>

    );
};

export default Auth;