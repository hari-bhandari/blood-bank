import React from 'react';
import {ContactBox, ContactWrapper, Recieved} from "../bloodRequest/RequestBloodFormCSS";
import PageHeader from "../../_shared/PageHeader";
import UploadPhoto from "../UploadPhoto";
import BackButton from "../../_shared/BackButton";
import {useParams} from "react-router";
const ChangeImage = (props) => {
    const {id}=useParams()
    return (
        <ContactWrapper>
            <BackButton goBack={props.history.goBack}/>
            <ContactBox>
                <Recieved>
                    <PageHeader>Add an image for your request</PageHeader>
                    <UploadPhoto id={id}/> </Recieved>
            </ContactBox>
        </ContactWrapper>
    );
};

export default ChangeImage;