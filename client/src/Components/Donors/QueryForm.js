import React from 'react';
import {QueryContainer} from "./QueryFormCss";
import SelectComponent from "../query/SelectComponent";
import {districts,bloodType} from "../utils/sharedData";

const QueryForm = () => {
    const bloodOptions=bloodType.map(d=>({
        "value":d,
        "label":d.charAt(0).toUpperCase() + d.slice(1)
    }))
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };
    return (
        <QueryContainer>
         <SelectComponent onChange={handleChange} defaultLabel={"Blood"} isMulti={false} options={bloodOptions}/>
        </QueryContainer>
    );
};

export default QueryForm;