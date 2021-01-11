import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import FAQ from "./FAQ";
const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 2rem 0;
 padding: 1rem;
`


const FAQs= [
    {
        question: "How does this blood bank work?",
        answer: `When a user is created/registered into blood ban. Their data is securely stored in mongodb and their password is encrypted securely. However, when registering, the user has to agree to show their information to those people who are in need.However, Your password cannot be seen by any individual/company.`,
        category: "Help",
        isOpen: false
    },
    {
        question: "How do i request for a blood donation?",
        answer: `To request for a blood, simply open the navigation and click on the "REQUEST FOR BLOOD" tab. Fill out the necessary fields and submit it.To help donor, you can pay for their expenses such as : travel costs and food `,
        category: "Help",
        isOpen: false
    },
    {
        question: "Why do we need blood bank?",
        answer: `Millions of people die each year after not getting blood on time and i believe this is a problem that can be stopped. This application allows 
        you to request for a blood.You can request for a blood , or even be the donor.`,
        category: "Help",
        isOpen: false
    },
    {
        question: "Who created this and why?",
        answer: `One blood donation can potentially save three lives. Perhaps, You could be the one to give them second life. This site is currently maintained by Hari Bhandari (https://haribhandari.me). However, I am actively looking for someone to collaborate with me to make this site even more convenient and functional.`,
        category: "Request",
        isOpen: false
    },

]
const FAQPage = () => {
    const [faqs, setFaqs] = useState(FAQs);

    const toggleFAQ = (index) => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.isOpen = !faq.isOpen
            } else {
                faq.isOpen = false;
            }

            return faq;
        }))
    }
    return (
            <Container>
                {faqs.map((faq, index) => (
                    <FAQ
                        key={index}
                        index={index}
                        faq={faq}
                        toggleFAQ={toggleFAQ} />
                ))}
            </Container>
    );
};

export default FAQPage;