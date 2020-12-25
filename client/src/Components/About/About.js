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
        question: "What is a novel coronavirus?",
        answer: `A novel coronavirus is a new coronavirus that has not been previously identified.
       The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.`,
        category: "basics",
        isOpen: false
    },
    {
        question: "Why is the disease being called coronavirus disease 2019, COVID-19?",
        answer: `On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as "2019 novel coronavirus" or "2019-nCoV" 
       \nThere are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans.`,
        category: "basics",
        isOpen: false
    },
    {
        question: "Will warm weather stop the outbreak of COVID-19?",
        answer: `It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months.  
      There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.`,
        category: "spread",
        isOpen: false
    },
    {
        question: "Can mosquitoes or ticks spread the virus that causes COVID-19?",
        answer: `At this time, CDC has no data to suggest that this new coronavirus or other similar coronaviruses are spread by mosquitoes or ticks. The main way that COVID-19 spreads is from person to person.`,
        category: "spread",
        isOpen: false
    },
    {
        question: "Should children wear masks?",
        answer: `In general, children 2 years and older should wear a mask. However, CDC recognizes that wearing masks may not be possible in every situation or for some people. 
      Appropriate and consistent use of masks may be challenging for some children, such as children with certain disabilities, including cognitive, intellectual, developmental, sensory and behavioral disorders.`,
        category: "children",
        isOpen: false
    },
    {
        question: "Should I get a face mask?",
        answer: `Yes, you should wear a mask whenever you are in a public place where you will encounter other people. 
     The coronavirus that causes COVID-19 can spread between people interacting in close proximity — for example, speaking, coughing, sneezing, or singing— even if those people do not symptoms.`,
        category: "basics",
        isOpen: false
    },
    {
        question: "Can I make my own hand sanitizer?",
        answer: `There are no studies supporting the effectiveness of homemade hand sanitizer blend in killing the new coronavirus on people’s hands. 
     Experts agree that the best method for cleaning hands is washing for at least 20 seconds with soap and water`,
        category: "basics",
        isOpen: false
    }
]
const About = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchFaqs();
    }, []);
    const fetchFaqs =  () => {
            setFaqs(FAQs);
    };
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

export default About;