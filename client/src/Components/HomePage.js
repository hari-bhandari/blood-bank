import React, {useState} from 'react';
import './Homepage.css'
import {Container, Row, Col} from 'react-grid-system';
import RequestCard from "./Request/RequestCard";
import axios from "axios";
import {useQuery} from "react-query";
import {bloodType, districts, turnIntoSelectFormat} from "./utils/sharedData";
import SelectComponent from "./query/SelectComponent";
import EmptyMessageBox from "./shared/EmptyMessageBox";
import {CentralizeDiv} from "../util/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";

const HomePage = () => {
    const [district,setDistrict]=useState(null)
    const [blood,setBlood]=useState(null)
    const fetchDonors = async () => {
        const response = await axios(
            `/api/help?bloodType=${blood}&district=${district}`
        );
        return response.data.data;
    }
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
                    <SelectComponent options={bloodOptions} isMulti={false}  onChange={handleChangeForBlood} defaultLabel={"Search by blood type..."}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <SelectComponent options={districtOptions} isMulti={false}  onChange={handleChangeForDistrict} defaultLabel={"Search by district..."}/>
                </Col>
            </Row>
            <EmptyMessageBox message={"We don't have any people with your criteria. Why not save a life with your blood?"} toBeShown={data?.length===0}/>

            {status==="loading"?(<CentralizeDiv>
                <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
            </CentralizeDiv>):(
                <Row>
                    {data?.map(donor=>(
                        <Col lg={4} md={6} sm={12}>
                            <RequestCard donor={donor}/>
                        </Col>
                    ))}
                </Row>)}

        </Container>
    );
};

export default HomePage;