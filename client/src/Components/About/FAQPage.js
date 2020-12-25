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
        answer: `One blood donation can potentially save three lives. Perhaps, You could be the one to give them second life. The main motive 
        behind this project is to minify the process to potentially find a donor. You can request for a blood , or even be the donor. At the moment, By the time you register, You info will be automatically shown to other people and they can call you for the required help.`,
        category: "Help",
        isOpen: false
    },
    {
        question: "How do i request for a blood donation?",
        answer: `To request for a blood, simply open the navigation and click on the "REQUEST FOR BLOOD" tab. Fill out the necessary details.To help donor, you can pay for their expenses such as : travel costs and food `,
        category: "Request",
        isOpen: false
    },
    {
        question: "Who created this and why?",
        answer: `This site is maintained by Hari Bhandari (https://haribhandari.me). However, I am actively looking for someone to collaborate with me to make this site even more convenient and functional.`,
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