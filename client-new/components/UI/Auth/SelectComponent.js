import React from 'react';
import Select from "react-select";

const SelectComponent = ({options, onChange, defaultLabel, isMulti, width,bottom}) => {
    const customStyles = {
        container: provided => ({
            ...provided,
            width: width
        })
    };
    return (
        <Select
            options={options} menuPlacement={bottom?'bottom':'top'} onChange={onChange}
            placeholder={defaultLabel} isMulti={isMulti} width={"200px"} styles={customStyles}
        />
    );
};

export default SelectComponent;