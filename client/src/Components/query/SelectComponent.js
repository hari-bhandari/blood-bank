import React from 'react';
import Select from "react-select";

const SelectComponent = ({options,onChange,defaultLabel,isMulti}) => {
    return (
        <Select
            className="menu-outer-top"
            onChange={onChange}
            options={options}
            placeholder={defaultLabel}
            isMulti={isMulti}
            style-={{position:"absolute"}}
        />
    );
};

export default SelectComponent;