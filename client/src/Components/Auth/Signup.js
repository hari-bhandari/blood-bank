import React,{useContext,useEffect} from 'react';
import {useForm} from "./useForm";
import {districts,bloodType,turnIntoSelectFormat} from "../sharedUtils/sharedData";
import SelectComponent from "../_shared/Query/SelectComponent";
import {QueryContainer} from "../_shared/Query/QueryFormCss";
import AuthContext from "../../Context/auth/authContext";
import {toast} from "react-toastify";

const Signup = (props) => {
    const authContext=useContext(AuthContext);
    const {register,isAuthenticated,loadUser,error}=authContext;
    const districtOptions=turnIntoSelectFormat(districts)
    const bloodOptions=turnIntoSelectFormat(bloodType)
    const [valuesForSignup,handleChangeForSignup,handleChangeManual]=useForm()
    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
    },[])
    const onRegister=(e)=>{
        e.preventDefault()
        register(valuesForSignup)
    }
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
    const handleChangeForBlood = selectedOption => {
        handleChangeManual("bloodType",selectedOption.value)
    };
    const handleChangeForDistrict = selectedOption => {
        handleChangeManual("district",selectedOption.value)
    };
    const handleChangeForExpense = (e) => {
        // handleChangeManual("travel",e.value)
    };

    return (
        <form  className="sign-up-form" onSubmit={onRegister} >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-phone" style={{marginLeft:"20px"}}>+977</i>
                <input style={{paddingLeft:"30px"}} id="phone" name="phone" type="phone" placeholder="Phone Number" value={valuesForSignup.phone} onChange={handleChangeForSignup}/>
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

            <div className="queryBox">
                <QueryContainer>
                <SelectComponent  options={bloodOptions} isMulti={false}  onChange={handleChangeForBlood} defaultLabel={"Choose your district"}/>
                <SelectComponent options={districtOptions} isMulti={false}  onChange={handleChangeForDistrict} defaultLabel={"Choose your blood type"}/>
                </QueryContainer>

            </div>
            <p className="signup-agreement">By signing up,You're accepting to show your contact information and blood group to people in need</p>
            <input type="submit" className="btn" value="Sign up"  />
        </form>
    );
};

export default Signup;