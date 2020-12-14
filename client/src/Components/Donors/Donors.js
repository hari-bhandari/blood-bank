import React, {useContext,useEffect} from 'react';
import DonorItem from "./DonorItem";
import {Container, Row, Col} from 'react-grid-system'
import QueryForm from "./QueryForm";
import BloodContext from "../../Context/blood/bloodContext";
import SelectComponent from "../query/SelectComponent";
import {bloodType,districts,turnIntoSelectFormat} from "../utils/sharedData";
import axios from "axios";
import {useQuery} from "react-query";

const Donors = () => {
    const { isLoading, error, data } = useQuery('donors', () =>
        axios('/api/donors').then(res =>
            res.data.data
        )
    )
    const districtOptions=turnIntoSelectFormat(districts)
    const bloodOptions=turnIntoSelectFormat(bloodType)
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };
    return (
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <SelectComponent options={bloodOptions} isMulti={false} defaultLabel={"Query Blood Type..."} onChange={handleChange}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <SelectComponent options={districtOptions} isMulti={false} defaultLabel={"Query by District..."} onChange={handleChange}/>
                </Col>
                {data?.map(donor=>(
                    <Col lg={4} md={6} sm={12}>
                        <DonorItem donor={donor}/>
                    </Col>
                ))}

            </Row>
        </Container>
    );
};

export default Donors;