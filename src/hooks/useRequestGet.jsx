import { useState, useEffect } from 'react'
import https from '../config/axios'


const useRequestGet = (pathGet, key) =>{
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()

    const [skip, setSkip] = useState(0)
    const [count, setCount] = useState(1)
    const [take, setTake] = useState(5)
    const [countrecords, setCountrecords] = useState()


    useEffect(() =>{

        const get = async () => {

            if (key) {

                setLoading(true)

                try {

                    const response = await https.get(`${pathGet}/${key}`,{
                        params:{take, skip}
                    })
                    setData(response.data.data)
                    setCountrecords(response.data.count)
                    
                } catch (error) {
                    console.log(error)
                }

                setLoading(false)
                
            }else{

                setLoading(true)

                try {

                    const response = await https.get(pathGet,{
                        params:{take, skip}
                    })
                    setData(response.data.data)
                    setCountrecords(response.data.count)
                
                } catch (error) {
                    console.log(error)
                }

                setLoading(false)

            }

        }
        get()

    },[skip])

    const [search, setSearch] = useState('')
    const getSearch = async (e) =>{
        setSearch(e.target.value)
        const response = await https.get(pathGet,{
            params:{search, take, skip}
        })
        setData(response.data.data)
    }


    const paginationNext = () => {
        setSkip(count * take)
        setCount(count + 1)
    }
    const paginationBack = () => {
        setCount(count - 1)
        setSkip(skip - take)
    }
    


    return {paginationNext, paginationBack, count, countrecords, take, getSearch, data, loading}
}


export default useRequestGet