import React from 'react';

const Signup = () => {
    return (
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
            <p className="signup-agreement">By signing up,You're accepting to show your contact information and blood group to people in need</p>
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
    );
};

export default Signup;