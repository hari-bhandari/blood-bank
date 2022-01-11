import React,{useEffect,useContext} from 'react';
import {useLoginForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";
import {FaUser,FaLock} from "react-icons/fa";
import {emptyValue} from "./helper";
import Toast from "light-toast";
import {useRouter} from "next/router";
import axios from "axios";
import {JSONConfig, PUBLIC_URL_API} from "../../config";
const SignIn = () => {
    const router = useRouter()

    const authContext=useContext(AuthContext);
    const {login,isAuthenticated,loadUser}=authContext;
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
        try {
            const {data} = await axios.post(
                `${PUBLIC_URL_API}/api/auth/login`,
                {email: inputs.email, password: inputs.password},
                JSONConfig
            )
            login(data)
            localStorage.setItem('token', JSON.stringify(data.token))
            await loadUser()
            Toast.success('Successfully logged in')

        } catch (error) {
            Toast.fail(error.response.data.error + ', Please try again')
        }
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