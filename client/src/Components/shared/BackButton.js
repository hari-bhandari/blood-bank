import React from 'react';
import {FaArrowCircleLeft} from "react-icons/all";
import styled from "styled-components";
const BackContainer=styled.div`
  position: absolute;
  z-index: 2;
  &:hover{
    cursor: pointer;
  }
  
`
const BackButton = ({goBack}) => {
    return (
        <BackContainer onClick={goBack}>
            <FaArrowCircleLeft size={"50px"} />
        </BackContainer>
    );
};

export default BackButton;