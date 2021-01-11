import React from 'react';
import {
    FAQContainer,
    FAQAnswer,
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon,
    FAQCategory,
    Flex
} from "./FAQCss";
const FAQ = ({faq,toggleFAQ,index}) => {
    const { question, category, answer, isOpen } = faq;
    const icon = isOpen ? <CloseIcon /> : <SpanIcon />;

    return (
        <FAQContainer>
            <FAQQuestion>
                <Flex>
                    {question}
                    <FAQCategory>{category}</FAQCategory>
                </Flex>
                <Icon onClick={() => toggleFAQ(index)}>{icon}</Icon>
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                {answer}
            </FAQAnswer>
        </FAQContainer>
    );
};

export default FAQ;