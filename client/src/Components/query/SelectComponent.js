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
            styles={styles}
            style={{position:"absolute"}}
        />
    );
};

export default SelectComponent;