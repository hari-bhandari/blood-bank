import React from 'react';
import {useForm} from "./useForm";

const SignIn = () => {
    const [values,handleChange]=useForm()

    return (
        <form  className="sign-in-form">
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

        </form>
    );
};

export default SignIn;