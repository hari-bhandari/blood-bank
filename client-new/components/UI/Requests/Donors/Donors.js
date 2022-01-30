import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-grid-system';
import DonorItem from "./DonorCard";
import {bloodType, districts, turnIntoSelectFormat} from "../../data";
import SelectComponent from "../../Auth/SelectComponent";
import EmptyMessageBox from "../EmptyMessage";
import {SpinnerInfinity} from "spinners-react";
import {CentralizeDiv} from "../../centerDiv";
import useInfiniteQuery from '../useInfinityQuery'
import {useInView} from "react-hook-inview";
import {InsiderContainer, RequestsContainer} from "../Requests.styles";

const Donors = () => {
    const [district, setDistrict] = useState(null)
    const [blood, setBlood] = useState(null)
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    const [buttonClickLoading,setButtonClickLoading]=useState(false)
    const [pageNumber, setPageNumber] = useState(1)

    const {
        data,
        hasMore,
        loading,
        error
    } = useInfiniteQuery(pageNumber, district, blood, "donors")
    useEffect(() => {
        if (isVisible && hasMore) {
            setPageNumber(pageNumber => pageNumber + 1)
        }
    }, [isVisible])
    const districtOptions = turnIntoSelectFormat(districts)
    const bloodOptions = turnIntoSelectFormat(bloodType)
    const handleChangeForDistrict = selectedOption => {
        setPageNumber(1)
        setDistrict(selectedOption.value)
    };
    const handleChangeForBlood = selectedOption => {
        setPageNumber(1)
        setBlood(encodeURIComponent(selectedOption.value))
    };
    return (
        <RequestsContainer>
            <InsiderContainer>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <SelectComponent options={bloodOptions} isMulti={false} onChange={handleChangeForBlood} defaultLabel={"Search by blood type..."} bottom={true}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <SelectComponent options={districtOptions} isMulti={false} onChange={handleChangeForDistrict} defaultLabel={"Search by district..."} bottom={true}/>
                        </Col>
                    </Row>
                    <EmptyMessageBox message={"We don't have any people with your criteria. Why not save a life with your blood?"} toBeShown={data?.length === 0}/>
                    <Row>
                        {data?.map((donor, index) => {
                            if (data.length === index + 1) {
                                return <Col lg={4} md={6} sm={12} ref={ref}><DonorItem donor={donor} buttonClickLoading={buttonClickLoading} setButtonClickLoading={setButtonClickLoading}/>
                                    <div ref={ref}></div>
                                </Col>
                            } else {
                                return <Col lg={4} md={6} sm={12}><DonorItem donor={donor} buttonClickLoading={buttonClickLoading} setButtonClickLoading={setButtonClickLoading}/></Col>
                            }
                        })}
                    </Row>
                    {loading && (<CentralizeDiv>
                        <SpinnerInfinity size={286} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)"/>
                    </CentralizeDiv>)}

                </Container>
            </InsiderContainer>
        </RequestsContainer>
    );
};

export default Donors;