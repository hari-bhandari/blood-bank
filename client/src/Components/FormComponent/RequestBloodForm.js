import React, {useState,useContext} from 'react';
import {FaHandshake,FiSend} from "react-icons/all";
import useForm from "./useForm";
import {
    ContactWrapper,
    LeftContent,
    ContactBox,
    ContactForm,Recieved,Button
} from './RequestBloodFormCSS';
import SelectComponent from "../query/SelectComponent";
import {bloodType,districts,turnIntoSelectFormat} from "../utils/sharedData";
import AuthContext from "../../Context/auth/authContext";

function Contact() {
    const bloodTypeOptions=turnIntoSelectFormat(bloodType)
    const districtsOptions=turnIntoSelectFormat(districts)
    const authContext=useContext(AuthContext);
    const {user}=authContext;
    const [submitted, setSubmitted] = useState(false)
    const {formData, errors, handleInput, isFormValid} = useForm();
    const sendEmail = async () => {

    }
    return (
        <ContactWrapper id="contact">
            <ContactBox>
                {submitted&&(<Recieved><FaHandshake style={{fontSize: '7em'}}/>
                    <p>Your message has been recieved. I will try to get back to you as soon as possible. Thanks</p></Recieved>)}
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
                                className={errors._replyto && 'invalid'}
                                onChange={handleInput}
                                value={formData.email}
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
                                className={errors.name && 'invalid'}
                                onChange={handleInput}
                                value={formData.name}
                                name="name"
                                type="text"
                                required
                                placeholder="Hari Bhandari"
                            />
                        </label>
                        <label className="label__phone">
                            <span>Phone</span>
                            <input
                                className={errors.name && 'invalid'}
                                onChange={handleInput}
                                value={formData.name}
                                name="phone"
                                type="text"
                                required
                                placeholder="9841921783"
                            />
                        </label>
                        <label className="label__district">
                            <span>District</span>
                            <input
                                className={errors.name && 'invalid'}
                                onChange={handleInput}
                                value={formData.name}
                                name="district"
                                type="text"
                                required
                                placeholder="Baglung"
                            />
                        </label>
                        <label className="label__bloodType">
                            <span>Choose your blood type...</span>
                            <SelectComponent defaultLabel={"Choose...."} options={bloodTypeOptions}  styles={customStyles}/>
                        </label>
                        <label className="label__hospital">
                            <span>Choose your District...</span>
                            <SelectComponent defaultLabel={"Choose...."} options={districtsOptions} styles={customStyles}/>
                        </label>
                        <label className="label__message">
                            <span>Message</span>
                            <textarea
                                className={errors.message && 'invalid'}
                                onChange={handleInput}
                                value={formData.message}
                                name="message"
                                required
                                placeholder="Describe the situation...."
                            />
                        </label>

                        <Button
                            disabled={!isFormValid}
                            className="submit__btn"
                            as="button"
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