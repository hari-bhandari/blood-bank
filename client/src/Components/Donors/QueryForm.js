import React,{useEffect,useState} from 'react';
import {QueryContainer, SelectBox} from "./QueryFormCss";
import Select from "react-select";
import axios from "axios";
const QueryForm = () => {
    const [options,setOptions]=useState(["Loading"])
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };
    const bloodTypes=['A+','A-','B+','B-','O+','O-','AB+',]
    const bloodOptions=bloodTypes.map(d=>({
        "value":d,
        "label":d.charAt(0).toUpperCase() + d.slice(1)
    }))
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
    return (
        <QueryContainer>
            <SelectBox>
            Choose District
            <Select
                onChange={handleChange}
                options={options}
                isMulti
            />
            </SelectBox>
            <SelectBox>
                Choose Blood Type
                <Select
                    onChange={handleChange}
                    options={bloodOptions}
                    isMulti
                />
            </SelectBox>
        </QueryContainer>
    );
};

export default QueryForm;