import React,{useEffect,useContext} from 'react';
import {useLoginForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";
import {FaUser,FaLock} from "react-icons/fa";

const SignIn = () => {
    const authContext=useContext(AuthContext);
    const {login,isAuthenticated}=authContext;
    const {inputs,handleChangeForLogin}=useLoginForm()
    useEffect(()=>{
        if(isAuthenticated){
            // props.history.push('/')
        }
    },[])

    const onLogin=(e)=>{
        e.preventDefault()
        login(inputs)
    }

    return (
        <form  className="sign-in-form" onSubmit={onLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i><FaUser/></i>
                <input id="email" name="email" type="text" placeholder="Email" value={inputs.email} onChange={handleChangeForLogin} required/>
            </div>
            <div className="input-field">
                <i><FaLock/></i>
                <input id="password" name="password" type="password" placeholder="Password" value={inputs.password} onChange={handleChangeForLogin} required/>
            </div>
            <input type="submit" value="Login" className="btn solid" />

        </form>
    );
};

export default SignIn;