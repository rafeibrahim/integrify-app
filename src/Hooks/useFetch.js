import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
   

    const getUsers = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('getUsers error: ' + response.status);
        };
        const json = await response.json();
        setData(json)
    };

    useEffect(() => {
        getUsers(url)
    }, [url])

    return data;
}