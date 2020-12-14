import React from 'react';
import {QueryContainer} from "./QueryFormCss";
import SelectComponent from "../query/SelectComponent";
import {districts,bloodType,turnIntoSelectFormat} from "../utils/sharedData";

const QueryForm = () => {
    const Districts=turnIntoSelectFormat(districts)
    const BloodTypes=turnIntoSelectFormat(bloodType)
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };
    return (
        <QueryContainer>
         <SelectComponent onChange={handleChange} defaultLabel={"Blood"} isMulti={false} options={BloodTypes}/>
        </QueryContainer>
    );
};

export default QueryForm;