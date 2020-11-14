import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../../Context/auth/authContext"
import {useForm, validate} from "../FormComponent/useForm";
import {toast} from "react-toastify";
import './Auth.css'
const Auth = (props) => {
    const authContext=useContext(AuthContext);
    const {login,register,isAuthenticated,loadUser,error}=authContext;
    const [values,handleChange]=useForm()
    const [valuesForSignup,handleChangeForSignup]=useForm()
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
        if(validate(values)){
            login(values)
        }
        else{
            toast.error('Your username or password was not valid', {
                position: "top-center",
                autoClose: 80000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const onRegister=(e)=>{
        e.preventDefault()
        if(!validate(valuesForSignup)){
            register(valuesForSignup)
        }
        else{
            error('error')
        }
    }





    const [Login,setLogin]=useState(true)
    const onClick=()=>{
        setLogin(!Login)
    }

    return (
        <div className={`container ${Login?'':'sign-up-mode'}`}>
            <div className="forms-container">
                <div className="signin-signup" >
                    <form  className="sign-in-form" onSubmit={onLogin}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"/>
                            <input id="email" name="email" type="text" placeholder="Email" value={values.email} onChange={handleChange} required/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input id="password" name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} required/>
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"/>
                            </a>

                        </div>
                    </form>
                    <form  className="sign-up-form" onSubmit={onRegister}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-phone"/>
                            <input id="number" name="number" type="number" placeholder="Phone Number" value={valuesForSignup.number} onChange={handleChangeForSignup}/>
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
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"/>
                            </a>
                        </div>
                    </form>
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

    );
};

export default Auth;