import React from 'react';
import Select from "react-select";

const SelectComponent = ({options,onChange,defaultLabel,isMulti,styles}) => {

    return (
        <Select
            className="menu-outer-top"
            onChange={onChange}
            options={options}
            placeholder={defaultLabel}
            isMulti={isMulti}
            styles={{display:'absolute',zIndex:100}}
        />
    );
};

export default SelectComponent;