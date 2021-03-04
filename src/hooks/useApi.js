import {useState} from "react";

function useApi(apiFunc) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function request() {
        setLoading(true);
        setError(null);
        const response = await apiFunc();
        setLoading(false);
        if (!response.ok) {
            setError(response.problem);
            return;
        }
        setData(response.data);
    }

    return {
        data,
        error,
        loading,
        request
    };
}

export default useApi;
