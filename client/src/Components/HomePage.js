import React, {useContext, useEffect} from 'react';
import './Homepage.css'
import {Container, Row, Col} from 'react-grid-system';
import BloodContext from "../Context/blood/bloodContext";
import RequestCard from "./Request/RequestCard";

const HomePage = () => {
    const bloodContext = useContext(BloodContext)
    const {getBloodRequests, bloodRequests, loading} = bloodContext

    useEffect(() => {
        getBloodRequests()
    }, [])
    return (
        <Container>
            <Row>
                <Col lg={4} md={6} sm={1}>
                    <RequestCard/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <RequestCard/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <RequestCard/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <RequestCard/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <RequestCard/>
                </Col>

            </Row>
        </Container>
    );
};

export default HomePage;