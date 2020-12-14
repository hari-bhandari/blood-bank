import React,{useEffect,useState} from 'react';
import Select from "react-select";
import {SelectBox} from "../Donors/QueryFormCss";
import axios from "axios";

const DistrictsSelect = () => {
    const [options,setOptions]=useState(["Loading"])
    const loadValue=async ()=>{
        try{
            const data=await axios.get('https://api.npoint.io/8af3c8b340e081e55551')
            const selectOptions=data.data.map(d=>({
                "value":d,
                "label":d.charAt(0).toUpperCase() + d.slice(1)
            }))
            setOptions(selectOptions)
        }catch (e){
            console.log('Error')
        }
    }
    useEffect(()=>{
        loadValue()
    },[])
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <SelectBox>
            Choose District
        <Select
            onChange={handleChange}
            options={options}
            defaultInputValue="Choose "

            isMulti
        />
        </SelectBox>
    );
};

export default DistrictsSelect;