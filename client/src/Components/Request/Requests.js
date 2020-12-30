import React, {useState,useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import RequestCard from "./RequestCard";
import {bloodType, districts, turnIntoSelectFormat} from "../utils/sharedData";
import SelectComponent from "../query/SelectComponent";
import EmptyMessageBox from "../shared/EmptyMessageBox";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";
import useInfiniteQuery from '../shared/UseInfiniteQuery'
import {useInView} from "react-hook-inview";
const Requests = () => {
    const [district,setDistrict]=useState(null)
    const [blood,setBlood]=useState(null)
    const [ref, isVisible] = useInView({
        threshold: 1,
    })

    const [pageNumber, setPageNumber] = useState(1)

    const {
        data,
        hasMore,
        loading,
        error
    } = useInfiniteQuery( pageNumber,district,blood)
    useEffect(()=>{
        if(isVisible && hasMore){
            setPageNumber(pageNumber=>pageNumber+1)
        }
    },[isVisible])
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

            {loading?(<CentralizeDiv>
                <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
            </CentralizeDiv>):(
                <Row>
                    {data?.map((donor,index)=> {
                        if (data.length === index + 1) {
                            return <Col lg={4} md={6} sm={12} ref={ref}><RequestCard donor={donor} /><div ref={ref}></div></Col>
                        }
                        else {
                            return <Col lg={4} md={6} sm={12}><RequestCard donor={donor}/></Col>
                        }


                    })}
                </Row>)}

        </Container>
    );
};

export default Requests;