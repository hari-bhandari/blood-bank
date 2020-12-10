import React, {useState} from 'react';
import {FaHandshake,FiSend} from "react-icons/all";
import useForm from "./useForm";
import {
    ContactWrapper,
    LeftContent,
    ContactBox,
    ContactForm,Recieved,Button
} from './RequestBloodFormCSS';
import AuthContext from "../../Context/auth/authContext";

function Contact() {
    const authContext=useContext(AuthContext);
    const {user}=authContext;
    const [submitted, setSubmitted] = useState(false)
    const {formData, errors, handleInput, isFormValid} = useForm();
    const sendEmail = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const {_replyto, name, message} = formData
        const raw = JSON.stringify({_replyto, name, message});

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            await fetch("https://formspree.io/mgenrlnr", requestOptions)
            setSubmitted(true)
        } catch (e) {
            setSubmitted(false)
        }
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
                    <ContactForm

                    >
                        <label className="label__email">
                            <span>Email</span>
                            <input
                                className={errors._replyto && 'invalid'}
                                onChange={handleInput}
                                value={formData.email}
                                id="email"
                                name="_replyto"
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
                            <span>Blood Type</span>
                            <input
                                className={errors.name && 'invalid'}
                                onChange={handleInput}
                                value={formData.name}
                                name="district"
                                type="text"
                                required
                                placeholder="B+"
                            />
                        </label>
                        <label className="label__hospital">
                            <span>Hospital Name</span>
                            <input
                                className={errors.name && 'invalid'}
                                onChange={handleInput}
                                value={formData.name}
                                name="district"
                                type="text"
                                required
                                placeholder="Bir Hospital"
                            />
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
                            onClick={(e)=>{e.preventDefault()
                                sendEmail()
                            }}
                        >
                            <FiSend/> Submit
                        </Button>
                    </ContactForm>):(<div></div>)}
            </ContactBox>
        </ContactWrapper>
    );
}
export default Contact;