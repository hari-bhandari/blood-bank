import React,{useContext} from 'react';
import DonorCard from "./DonorCard";
import './Homepage.css'
import { Container, Row, Col } from 'react-grid-system';
import {NavBtnLink} from "./Navbar/NavbarElements";
import RequestForm from "./FormComponent/RequestForm";
import BloodContext from "../Context/blood/bloodContext";

const HomePage = () => {
    const bloodContext=useContext(BloodContext)
    const {get}
    return (
        <Container >
            <Row>
                <Col lg={9}>
                    <RequestForm/>
                    <h2>You can always donate them...</h2>
                    <DonorCard help={true}/>
                    <DonorCard help={true}/>
                    <DonorCard help={true}/>
                    <DonorCard help={true}/>

                </Col>
                <Col lg={3}>
                    <h3>Top Donors</h3>
                   <DonorCard />
                   <DonorCard/>
                   <DonorCard/>
                    <NavBtnLink to='/help' style={{marginTop:'10px'}}>See More</NavBtnLink>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;