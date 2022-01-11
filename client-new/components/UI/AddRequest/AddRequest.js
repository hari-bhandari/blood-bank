import React from 'react';
import {MultiStepForm, Step} from '@haribhandari/react-step'
import styled from "styled-components";
import BasicInformation from "./BasicInformation";
import AdditionalDetails from "./AdditionalDetails";

const ButtonContainer=styled.div`
  display: flex;
  justify-content: space-between;
`
const Container=styled.div`
  width: 90%;
  max-width: 900px;
  margin: 150px auto 0 auto;
  .stepper-container{
    margin-left: 30px;
    margin-right: 30px;
  }
`

const MultiStepFormComponent = () => {
    const [active, setActive] = React.useState(1)

    const next=()=>{
        setActive(active+1)
    }
    const prev=()=>{
        setActive(active-1)
    }




    return (
        <Container>
            <MultiStepForm activeStep={active} >
                <Step label={'Personal Information'}>
                    <BasicInformation next={next} />
                </Step>

                <Step label={'Additional Details'}>
                    <AdditionalDetails prev={prev}/>
                </Step >

            </MultiStepForm>
            <ButtonContainer>

            </ButtonContainer>
        </Container>
    )
}

export default MultiStepFormComponent;