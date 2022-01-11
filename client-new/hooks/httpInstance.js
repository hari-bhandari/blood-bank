import axios from 'axios';


const instance = axios.create({
    baseURL: '/',
});

const requestHandler = (config) => {

    config.timeout = 30000;
    return config;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(undefined, (error) => {
    // handle error
    if (axios.isCancel(error)) {
    }
    return Promise.reject(error.response?.data?.error);
});

export default instance;
