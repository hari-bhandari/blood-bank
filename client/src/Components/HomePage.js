import React, {useContext, useEffect} from 'react';
import DonorCard from "./DonorCard";
import './Homepage.css'
import { Container, Row, Col } from 'react-grid-system';
import {NavBtnLink} from "./Navbar/NavbarElements";
import RequestForm from "./FormComponent/RequestForm";
import BloodContext from "../Context/blood/bloodContext";

const HomePage = () => {
    const bloodContext=useContext(BloodContext)
    const {getBloodRequests,bloodRequests,loading}=bloodContext
    useEffect(()=>{
        getBloodRequests()
    },[])
    return (
        <Container >
            <Row>
                <Col lg={9}>
                    <RequestForm/>
                    <h2>You can always donate them...</h2>
                    {
                        !loading&&bloodRequests.map((value)=>(
                            <DonorCard help={true} name={value.name} bloodType={value.bloodType} phone={value.phone} email={value.email} address={value.address} hospitalName={value.hospitalName}/>
                        ))
                    }

                   

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