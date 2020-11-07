import React, {useContext, useState} from 'react';
import AuthContext from "../../Context/auth/authContext"
import { useFormik } from 'formik';
import './Auth.css'
const Auth = () => {
    const authContext=useContext(AuthContext);

    const {login,isAuthenticated,loadUser,error}=authContext;
    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        onSubmit: values => {
            login(values);
        },
    });
    const signupFormik = useFormik({
        initialValues: {
            number: '',
            email:'',
            password:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const [Login,setLogin]=useState(true)
    const onClick=()=>{
        setLogin(!Login)
    }

    return (
        <div className={`container ${Login?'':'sign-up-mode'}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={loginFormik.handleSubmit} className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input id="email" name="email" type="text" placeholder="Email" value={loginFormik.values.email} onChange={loginFormik.handleChange}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input id="password" name="password" type="password" placeholder="Password" value={loginFormik.values.password} onChange={loginFormik.handleChange}/>
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>

                        </div>
                    </form>
                    <form  onSubmit={signupFormik.handleSubmit} className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input id="password" name="number" type="number" placeholder="Phone Number" value={signupFormik.values.number} onChange={signupFormik.handleChange}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input name="email" type="email" type="email" placeholder="Email" value={signupFormik.values.email} onChange={signupFormik.handleChange} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input name="password" type="password" type="password" placeholder="Password" value={signupFormik.values.password} onChange={signupFormik.handleChange}/>
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
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