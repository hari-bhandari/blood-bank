import React,{useEffect,useContext} from 'react';
import {useLoginForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";
import {FaUser,FaLock} from "react-icons/fa";
import {emptyValue} from "./helper";
import Toast from "light-toast";
import {useRouter} from "next/router";
const SignIn = () => {
    const router = useRouter()

    const authContext=useContext(AuthContext);
    const {login,isAuthenticated}=authContext;
    const {inputs,handleInputChange}=useLoginForm()
    useEffect(()=>{
        if(isAuthenticated){
            router.push('/').then(r => null)
            // props.history.push('/')
        }
    },[])

    const onLogin=async (e)=>{
        Toast.loading()
        e.preventDefault()
        if (!emptyValue(inputs.email)) {
            return Toast.fail('Please re-check your value for email')
        }
        if (!emptyValue(inputs.password)) {
            return Toast.fail('Please re-check your value for password')
        }
        await login(inputs)
        Toast.hide()
        router.push('/').then(r => null)
    }

    return (
        <form  className="sign-in-form" onSubmit={onLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i><FaUser/></i>
                <input id="email" name="email" type="text" placeholder="Email" value={inputs.email} onChange={handleInputChange} required/>
            </div>
            <div className="input-field">
                <i><FaLock/></i>
                <input id="password" name="password" type="password" placeholder="Password" value={inputs.password} onChange={handleInputChange} required/>
            </div>
            <input type="submit" value="Login" className="btn solid" />

        </form>
    );
};

export default SignIn;