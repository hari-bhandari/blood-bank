import React, {useContext,useEffect} from 'react';
import DonorItem from "./DonorItem";
import {Container, Row, Col} from 'react-grid-system'
import QueryForm from "./QueryForm";
import BloodContext from "../../Context/blood/bloodContext";

const Donors = () => {
    const bloodContext=useContext(BloodContext)
    const {getDonors,donors,loading}=bloodContext
    useEffect(()=>{
        getDonors()
    },[])

    return (
        <Container>
            <QueryForm/>
            <Row>
                {donors?.map(donor=>(
                    <Col lg={4} md={6} sm={1}>
                        <DonorItem donor={donor}/>
                    </Col>
                ))}

            </Row>
        </Container>
    );
};

export default Donors;