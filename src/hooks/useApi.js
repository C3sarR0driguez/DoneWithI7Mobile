import {useState} from "react";

function useApi(apiFunc) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function request(...args) {
        setLoading(true);
        setError(null);
        const response = await apiFunc(...args);
        setLoading(false);
        setError(response.problem);
        setData(response.data);

        return response;
    }

    return {
        data,
        error,
        loading,
        request
    };
}

export default useApi;
