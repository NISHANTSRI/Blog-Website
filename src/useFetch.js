import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true)
    // eslint-disable-next-line
    const [error, seterror] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Unable to fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
            })
            .catch(error => {
                if (error.message === 'AbortError') {
                    seterror("fetch aborted");
                } else {
                    setisPending(false)
                    seterror(error.message);
                }
            })
        return () => abortCont.abort();
    }, [url])


    return { data, isPending, error };
}

export default useFetch;