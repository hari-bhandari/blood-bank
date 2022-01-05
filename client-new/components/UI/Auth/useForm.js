import {useState} from 'react'

const useLoginForm = () => {
    const [inputs, setInputs] = useState({});
    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({...inputs, [event.target.name]: event.target.value}));
    }
    const setDefaultValues = (values) => {
        setInputs(values)
    }
    return {
        handleInputChange,
        inputs,setDefaultValues
    };
}
export {useLoginForm}