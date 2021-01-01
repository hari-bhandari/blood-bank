import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useInfiniteQuery(pageNumber,district,bloodType,type) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
        setData(null)
    }, [bloodType,district])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: `/api/${type}?limit=6&page=${pageNumber}&bloodType=${bloodType}&district=${district}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setData(data => {
                if(!data){
                    return [...new Set(res.data.data)]
                }
                return [...data, ...res.data.data]
            })
            setHasMore(res.data.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [ pageNumber,district,bloodType])

    return { loading, error, data, hasMore }
}