import React from 'react';
import Select from "react-select";

const SelectComponent = ({options, onChange, defaultLabel, isMulti, width,bottom,height,borderRadius}) => {
    const customStyles = {
        container: provided => ({
            ...provided,
            width: width,
            height:height,
            minHeight:height
        }),
        control: base => ({
            ...base,
            height: 55,
            minHeight: 55,
            borderRadius:borderRadius
        })
    };
    return (
        <Select
            options={options} menuPlacement={bottom?'bottom':'top'} onChange={onChange}
            placeholder={defaultLabel} isMulti={isMulti} width={"200px"} styles={customStyles} height={height}
        />
    );
};

export default SelectComponent;