import React from 'react';
import DonorCard from "./DonorCard";
import './Homepage.css'
import { Container, Row, Col } from 'react-grid-system';
const HomePage = () => {
    return (
        <Container >
            <Row>
                <Col sm={9}>
                    One of three columns
                </Col>
                <Col sm={3}>
                    <h3>Need Action immediately</h3>
                   <DonorCard/>
                   <DonorCard/>
                   <DonorCard/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;