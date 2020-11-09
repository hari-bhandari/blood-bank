import React from 'react';
import DonorCard from "./DonorCard";
import './Homepage.css'
import { Container, Row, Col } from 'react-grid-system';
import {NavBtnLink} from "./Navbar/NavbarElements";
import RequestForm from "./FormComponent/RequestForm";
const HomePage = () => {
    return (
        <Container >
            <Row>
                <Col lg={9}>
                    <h3>Request  for a blood</h3>
                    <RequestForm/>
                </Col>
                <Col lg={3}>
                    <h3>Need Action immediately</h3>
                   <DonorCard/>
                   <DonorCard/>
                   <DonorCard/>
                    <NavBtnLink to='/help' style={{marginTop:'10px'}}>See More</NavBtnLink>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;