import React from 'react';
import DonorItem from "./DonorItem";
import {Container, Row, Col} from 'react-grid-system'

const Donors = () => {

    return (
        <Container>
            <Row>
                <Col lg={4} md={6} sm={1}>
                    <DonorItem/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <DonorItem/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <DonorItem/>
                </Col><Col lg={4} md={6} sm={1}>
                <DonorItem/>
            </Col>
                <Col lg={4} md={6} sm={1} md={6} sm={1} >
                    <DonorItem/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <DonorItem/>
                </Col><Col lg={4} md={6} sm={1}>
                <DonorItem/>
            </Col>
                <Col lg={4} md={6} sm={1}>
                    <DonorItem/>
                </Col>
                <Col lg={4} md={6} sm={1}>
                    <DonorItem/>
                </Col>
            </Row>
        </Container>
    );
};

export default Donors;