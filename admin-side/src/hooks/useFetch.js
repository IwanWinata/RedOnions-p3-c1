import { useEffect, useState } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response not Ok`)
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                setData(data)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return {
        data,
        loading
    }
}


export default useFetch
