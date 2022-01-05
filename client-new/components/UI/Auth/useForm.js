import {useState} from 'react'

const useLoginForm = () => {
    const [inputs, setInputs] = useState({phone:'+977'});
    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({...inputs, [event.target.name]: event.target.value}));
    }
    const handleInputChangeManually = (name,value) => {
        setInputs((inputs) => ({...inputs, [name]: value}));
    }
    const handleInputForCheckbox=(event) => {
        event.persist();
        setInputs((inputs) => ({...inputs, ["shareInformation"]: event.target.checked}));
    }
    const setDefaultValues = (values) => {
        setInputs(values)
    }
    return {
        handleInputChange,
        inputs,setDefaultValues,handleInputChangeManually,handleInputForCheckbox
    };
}
export {useLoginForm}