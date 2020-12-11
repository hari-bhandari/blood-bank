import React, {useContext, useEffect} from 'react';
import DonorCard from "./DonorCard";
import './Homepage.css'
import { Container, Row, Col } from 'react-grid-system';
import {NavBtnLink} from "./Navbar/NavbarElements";
import BloodContext from "../Context/blood/bloodContext";
import RequestCard from "./Request/RequestCard";
const HomePage = () => {
    const bloodContext=useContext(BloodContext)
    const {getBloodRequests,bloodRequests,loading}=bloodContext
    useEffect(()=>{
        getBloodRequests()
    },[])
    return (
        <Container >
            <Row>
                <Col lg={3}>
                    <RequestCard/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;