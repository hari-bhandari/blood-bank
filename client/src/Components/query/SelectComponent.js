import React from 'react';
import Select from "react-select";

const SelectComponent = ({options,onChange,defaultLabel,isMulti}) => {
    return (
        <Select
            onChange={onChange}
            options={options}
            placeholder={defaultLabel}
            isMulti={isMulti}
        />
    );
};

export default SelectComponent;