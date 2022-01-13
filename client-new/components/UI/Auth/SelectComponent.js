import React from 'react';
import Select from "react-select";
import axios from "axios";
import {PUBLIC_URL_API} from "../../config";
export const UploadImagesToCloud = async (data) => {
    const UploadedImages = data.pictures?.filter(item => item.startsWith('http'))
    console.log({UploadedImages})
    const pictures = data.files;
    if (pictures.length === 0) {
        return {
            success: true,
            images: [ ...UploadedImages]
        }
    }

    const formData = new FormData();
    pictures.forEach(image => {
        formData.append("image", image);
    })
    try {
        const res = await axios.post(`${PUBLIC_URL_API}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return {
            success: true,
            images: [...res.data.imgLinks, ...UploadedImages]
        }

    } catch (e) {
        return {
            success: false,
            error: e
        }
    }

}
const SelectComponent = ({options, onChange, defaultLabel, isMulti, width,bottom,height,borderRadius,value}) => {
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
            placeholder={defaultLabel} isMulti={isMulti} width={"200px"} styles={customStyles} height={height} value={value}
        />
    );
};

export default SelectComponent;