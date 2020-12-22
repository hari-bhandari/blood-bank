import React, {useState,useContext} from 'react';
import {FaHandshake,FiSend} from "react-icons/all";
import {useForm} from "../Auth/useForm";
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
    const { values, handleInput,handleInputForSelect} = useForm();
    const handleChangeForBlood = selectedOption => {
        handleInputForSelect("bloodType",selectedOption.value)
    };
    const handleChangeForDistrict = selectedOption => {
        handleInputForSelect("district",selectedOption.value)
    };
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
                                value={values.name}
                                name="name"
                                type="text"
                                required
                                placeholder="Hari Bhandari"
                            />
                        </label>
                        <label className="label__phone">
                            <span>Phone</span>
                            <input
                                onChange={handleInput}
                                value={values.name}
                                name="phone"
                                type="text"
                                required
                                placeholder="9841921783"
                            />
                        </label>
                        <label className="label__district">
                            <span>District</span>
                            <input
                                onChange={handleInput}
                                value={values.name}
                                name="district"
                                type="text"
                                required
                                placeholder="Baglung"
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

                        <Button
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