import React, {useState} from 'react';
import './Auth.css'
const Auth = () => {
    const [login,setLogin]=useState(true)
    const onClick=()=>{
        setLogin(!login)
    }
    return (
        <div className={`container ${login?'':'sign-up-mode'}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
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
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
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

                        <p>
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
                        <p>
                            “Donate your blood for a reason, let the reason to be life”
                        </p>
                        <button className="btn transparent" onClick={onClick} id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Auth;