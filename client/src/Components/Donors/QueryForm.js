import React,{useEffect,useState} from 'react';
import {QueryContainer, SelectBox} from "./QueryFormCss";
import Select from "react-select";
import axios from "axios";
import SelectComponent from "../query/SelectComponent";
const QueryForm = () => {
    const bloodTypes=['A+','A-','B+','B-','O+','O-','AB+','AB-']
    const bloodOptions=bloodTypes.map(d=>({
        "value":d,
        "label":d.charAt(0).toUpperCase() + d.slice(1)
    }))
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };
    return (
        <QueryContainer>
         <SelectComponent/>
            <SelectBox>
                Choose Blood Type
                <Select
                    onChange={handleChange}
                    options={bloodOptions}
                    isMulti
                />
            </SelectBox>
        </QueryContainer>
    );
};

export default QueryForm;