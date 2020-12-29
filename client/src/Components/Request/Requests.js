import React, {useState,Fragment,useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import RequestCard from "./RequestCard";
import axios from "axios";
import {useInfiniteQuery, useQuery} from "react-query";
import {bloodType, districts, turnIntoSelectFormat} from "../utils/sharedData";
import SelectComponent from "../query/SelectComponent";
import EmptyMessageBox from "../shared/EmptyMessageBox";
import {CentralizeDiv} from "../../util/CentralizeDiv";
import {SpinnerInfinity} from "spinners-react";
import useIntersectionObserver from "../shared/useIntersectionObserver";

const Requests = () => {
    const [district,setDistrict]=useState(null)
    const [blood,setBlood]=useState(null)
    const [page,setPage]=useState(1)
    const fetchDonors = async () => {

    }
    let {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteQuery(
        'projects',
        async ({ pageParam = 0 }) => {
            const response = await axios(
                `/api/help?bloodType=${blood}&district=${district}&limit=11&page=${pageParam}`
            );
            return response.data.data;
        },
        {
            getPreviousPageParam: firstPage => firstPage?.pagination?.prev.page ?? false,
            getNextPageParam: lastPage => lastPage?.pagination?.next.page ?? false,
        }
    )
    const loadMoreButtonRef = React.useRef()
    // useIntersectionObserver({
    //     target: loadMoreButtonRef,
    //     onIntersect: fetchNextPage,
    //     enabled: hasNextPage,
    // })
    const districtOptions=turnIntoSelectFormat(districts)
    const bloodOptions=turnIntoSelectFormat(bloodType)
    const handleChangeForDistrict = selectedOption => {
        setDistrict(selectedOption.value)
    };
    const handleChangeForBlood = selectedOption => {
        setBlood(encodeURIComponent(selectedOption.value))
    };
    useEffect(()=>{
        console.log(status,
            data,
            error,
            isFetching,
            isFetchingNextPage,
            isFetchingPreviousPage,
            fetchNextPage,
            fetchPreviousPage,
            hasNextPage,
            hasPreviousPage)
    },[data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage])
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
                    {data.pages.map(page => (<Fragment key={page.nextId}>
                        {page.map(donor=>(
                            <Col lg={4} md={6} sm={12}>
                                <RequestCard donor={donor}/>
                            </Col>
                        ))}
                        <button
                            onClick={() => fetchNextPage()}
                        >
                        </button>
                    </Fragment>))}
                </Row>)}

        </Container>
    );
};

export default Requests;