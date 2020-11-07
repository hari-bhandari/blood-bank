
import axios from 'axios';
const setAuthToken=token=>{
    if(token){
        //adding token to the headers
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
    }else{
        //removing token from the headers
        delete axios.defaults.headers.common['Authorization']
    }
}
export default setAuthToken;