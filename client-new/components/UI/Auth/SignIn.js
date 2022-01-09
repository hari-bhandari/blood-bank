import React,{useEffect,useContext} from 'react';
import {useLoginForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";
import {FaUser,FaLock} from "react-icons/fa";
import {emptyValue} from "./helper";
import Toast from "light-toast";
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
        if (!emptyValue(inputs.email)) {
            return Toast.fail('Please re-check your value for Name')
        }
        if (!emptyValue(inputs.password)) {
            return Toast.fail('Please re-check your value for password')
        }
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