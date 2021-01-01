import axios from 'axios'
import React, {useEffect, useState} from "react";
const useQuery = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const getData=async ()=> {
        setLoading(true)
        setError(false)
        try {
            const res = await axios.get('/api/auth/me');
            setData(res.data.data)
        } catch (err) {
            setError(err.response.data.msg)
        }
    };

    useEffect(()=>{
        getData()
    },[])

    return { loading, error, data }
}

export default UseQuery;