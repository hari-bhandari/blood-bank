import React from 'react';
import {QueryContainer} from "./QueryFormCss";
import SelectComponent from "../query/SelectComponent";
import {districts,bloodType} from "../utils/sharedData";

const QueryForm = () => {

    return (
        <QueryContainer>
         {/*<SelectComponent onChange={handleChange} defaultLabel={"Blood"} isMulti={false} options={BloodTypes}/>*/}
        </QueryContainer>
    );
};

export default QueryForm;