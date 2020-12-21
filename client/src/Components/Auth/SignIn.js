import React,{useEffect,useContext} from 'react';
import {useForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";

const SignIn = (props) => {
    const authContext=useContext(AuthContext);
    const {login,isAuthenticated,loadUser,error}=authContext;
    const [values,handleChangeForLogin]=useForm()
    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
    },[])
    const onLogin=(e)=>{
        e.preventDefault()
        login(values)
    }

    return (
        <form  className="sign-in-form" onSubmit={onLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"/>
                <input id="email" name="email" type="text" placeholder="Email" value={values.email} onChange={handleChangeForLogin} required/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"/>
                <input id="password" name="password" type="password" placeholder="Password" value={values.password} onChange={handleChangeForLogin} required/>
            </div>
            <input type="submit" value="Login" className="btn solid" />

        </form>
    );
};

export default SignIn;