import axios, { AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: '/',
});

const requestHandler = (config) => {
    const token=localStorage.token.replaceAll('"','')
    if(token){
        config.headers['Authorization']=`Bearer ${token}`
    }
    config.timeout = 30000;
    return config;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(undefined, (error) => {
    // handle error
    if (axios.isCancel(error)) {
        console.log(`request cancelled`);
    }
    return Promise.reject(error.response?.data?.error);
});

export default instance;
