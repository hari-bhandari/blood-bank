import React, {useState} from 'react';
import DonorItem from "./DonorItem";
import {Container, Row, Col} from 'react-grid-system'
import SelectComponent from "../query/SelectComponent";
import {bloodType,districts,turnIntoSelectFormat} from "../utils/sharedData";
import axios from "axios";
import {useQuery} from "react-query";

const Donors = () => {

    const [district,setDistrict]=useState(null)
    const [blood,setBlood]=useState(null)
    const fetchDonors = async () => {
        let response
        if(district!==null && blood!==null){
            response = await axios(
                `/api/donors?bloodType=${blood}&district=${district}`
            );
        }
        if(district===null && blood==null){
            response = await axios(
                `/api/donors`
            );
        }
        if(district===!null || blood==null){
            response = await axios(
                `/api/donors?district=${district}`
            );
        }

        if(district===null || blood!==null){
            response = await axios(
                `/api/donors?bloodType=${blood}`
            );
        }
        return response.data.data;
    };
    const { status, data } = useQuery([district,blood], fetchDonors, {
        refetchAllOnWindowFocus: false
    });
    const districtOptions=turnIntoSelectFormat(districts)
    const bloodOptions=turnIntoSelectFormat(bloodType)
    const handleChangeForDistrict = selectedOption => {
        setDistrict(selectedOption.value)
    };
    const handleChangeForBlood = selectedOption => {
        setBlood(encodeURIComponent(selectedOption.value))
    };
    return (
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <SelectComponent options={bloodOptions} isMulti={false}  onChange={handleChangeForBlood}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <SelectComponent options={districtOptions} isMulti={false}  onChange={handleChangeForDistrict} defaultLabel={"Choose District"}/>
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