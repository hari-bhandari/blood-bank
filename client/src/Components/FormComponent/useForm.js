import {useState} from 'react';
///[name,address
export const useForm=()=>{
    const[state,setState]=useState({})
    const handleChange=e=>{
        setState((state)=>({...state,[e.target.name]:e.target.value}))
    }
    return [state,handleChange]
}
