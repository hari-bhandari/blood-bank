import React from 'react';
import Select from "react-select";

const SelectComponent = ({options,onChange,defaultLabel,isMulti}) => {
    return (

        <Select
            onChange={onChange}
            options={options}
            defaultInputValue={defaultLabel}
            isMulti={isMulti}
        />
    );
};

export default SelectComponent;