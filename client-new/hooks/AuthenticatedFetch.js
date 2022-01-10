import React, {useContext} from "react";
import axios from "axios";
import authContext from "../components/Context/auth/authContext";

const AuthenticatedFetch = (url) => {
    const auth = useContext(authContext);
    const { user } = auth;
    const [data, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const fetchData = async () => {
        try {
            const {data} = await axios.get(url,{
                headers:{
                    "Authorization": `Bearer ${user?.token}`
                }
            });
            setResponse(data);
            setIsLoading(false)
        } catch (error) {
            setError(error);
        }
    };
    React.useEffect(() => {
        fetchData();
    }, [url]);
    return [data, isLoading, error ];
};
export default AuthenticatedFetch