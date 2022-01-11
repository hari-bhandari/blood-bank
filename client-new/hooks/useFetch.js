import React, {useEffect, useState} from 'react';
import http from './httpInstance';
import httpAuth from './httpInstanceAuthed'
import axios from 'axios';

const memStore = {};



const useFetch = (url,auth, props = {}, axiosOptions = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [shouldRefetch, reFetch] = useState({});

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        const getData = async () => {
            setIsLoading(true);
            try {
                let httpConfig = {
                    method: 'GET',
                    url: url,
                    ...axiosOptions,
                    cancelToken: source.token
                };
                let res;
                if(!auth){
                    res = await http(httpConfig);
                }
                if(auth) {
                    res=await httpAuth(httpConfig);
                }
                if (!unmounted) {
                    setIsLoading(false);
                    setData(res?.data);
                    if (props.cache) memStore[url] = res?.data;
                }
            } catch (err) {
                if (!unmounted) {
                    setIsLoading(false);
                    setError(err);
                }
            }
        };

        if (memStore[url] && !unmounted) {
            setIsLoading(false);
            setData(memStore[url]);
        } else {
            getData();
        }

        return () => {
            unmounted = true;
            source.cancel(`${url} canceled`);
        };
    }, [url, shouldRefetch]);

    return [data, isLoading, error, reFetch,setData];
};

export default useFetch;
