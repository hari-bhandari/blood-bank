import React, {useState,useContext} from 'react';
import {FaHandshake,FiSend} from "react-icons/all";
import {useForm} from "../Auth/useForm";
import {
    ContactWrapper,
    LeftContent,
    ContactBox,
    ContactForm,Recieved,Button,ExpenseContainer
} from './RequestBloodFormCSS';
import SelectComponent from "../query/SelectComponent";
import {bloodType,districts,turnIntoSelectFormat} from "../utils/sharedData";
import axios from "axios";
import {toast} from "react-toastify";
import AuthContext from "../../Context/auth/authContext";

function Contact() {
    const bloodTypeOptions=turnIntoSelectFormat(bloodType)
    const districtsOptions=turnIntoSelectFormat(districts)
    const authContext=useContext(AuthContext);
    const [submitted, setSubmitted] = useState(false)
    const [values, handleInput,handleInputForSelect] = useForm();
    const handleChangeForBlood = selectedOption => {
        handleInputForSelect("bloodType",selectedOption.value)
    };
    const handleChangeForDistrict = selectedOption => {
        handleInputForSelect("district",selectedOption.value)
    };
    const handleChangeForChecked = (e) => {
        handleInputForSelect("expense",!values.expense)

    };
    const requestForBlood=async (e)=>{
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            await axios.post('/api/help/req', values, config);
            setSubmitted(true)
        } catch (err) {
            console.log(err.response)
            toast.error(err?.response?.data?.error, {
                position: "top-center",
                autoClose: 80000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }
    }
    return (
        <ContactWrapper>
            <ContactBox>
                {submitted&&(<Recieved><FaHandshake style={{fontSize: '7em'}}/>
                    <p>Your request has been accepted.</p></Recieved>)}
                {!submitted&&( <LeftContent>
                    <FaHandshake style={{fontSize: '5em'}}/>
                    <p> “Never feel yourself weak, </p>
                    <p> you have the ability to save a life. </p>
                    <p> Just donate blood.”</p>

                </LeftContent>)}
                {!submitted?(
                    <ContactForm>
                        <label className="label__email">
                            <span>Email</span>
                            <input
                                onChange={handleInput}
                                value={values.email}
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="example@gmail.com"
                            />
                        </label>
                        <label className="label__name">
                            <span>Patient Name</span>
                            <input
                                onChange={handleInput}
                                name="name"
                                type="text"
                                required
                                value={values.name}
                                placeholder="Hari Bhandari"
                            />
                        </label>
                        <label className="label__phone">
                            <span>Phone</span>
                            <input
                                onChange={handleInput}
                                value={values.phone}
                                name="phone"
                                type="text"
                                required
                                placeholder="9841921783"
                            />
                        </label>
                        <label className="label__district">
                            <span>Hospital Name</span>
                            <input
                                onChange={handleInput}
                                value={values.hospital}
                                name="hospital"
                                type="text"
                                required
                                placeholder="Bir Hospital"
                            />
                        </label>
                        <label className="label__bloodType">
                            <span>Choose your blood type...</span>
                            <SelectComponent defaultLabel={"Choose your blood type"} options={bloodTypeOptions}  styles={customStyles} onChange={handleChangeForBlood}/>
                        </label>
                        <label className="label__hospital">
                            <span>Choose your District...</span>
                            <SelectComponent defaultLabel={"Choose your district"} options={districtsOptions} styles={customStyles} onChange={handleChangeForDistrict}/>
                        </label>
                        <label className="label__message">
                            <span>Message</span>
                            <textarea
                                onChange={handleInput}
                                value={values.message}
                                name="message"
                                required
                                placeholder="Describe the situation...."
                            />
                        </label>
                        <ExpenseContainer><input type="checkbox" onChange={handleChangeForChecked}/><p>I confirm to pay for the travel expenses</p></ExpenseContainer>

                        <Button
                            className="submit__btn"
                            as="button"
                            onClick={requestForBlood}
                        >
                            <FiSend/> Submit
                        </Button>

                    </ContactForm>):(<div></div>)}
            </ContactBox>
        </ContactWrapper>
    );
}
const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#0C1A34",
        color: state.isSelected ? 'red' : 'blue',
        margin: "10px 0",
        height: "100%",
        minHeight: 35,
        borderColor: state.isFocused ? "#0C1A34" : "#0C1A34",
        "&:hover": {
            borderColor: state.isFocused ? "#0C1A34" : "#0C1A34"
        }
    }),
    menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,

    }),
    menuList: base => ({
        ...base,
        padding: 0,

    }),
    input: base => ({
        ...base,
        color: "#ff0000"
    }),
};
export default Contact;