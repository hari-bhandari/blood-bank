import React from 'react';
import Select from "react-select";

const SelectComponent = ({options, onChange, defaultLabel, isMulti, width}) => {
    const customStyles = {
        container: provided => ({
            ...provided,
            width: width
        })
    };
    return (
        <Select
            options={options} menuPlacement={'top'} onChange={onChange}
            placeholder={defaultLabel} isMulti={isMulti} width={"200px"} styles={customStyles}
        />
    );
};

export default SelectComponent;