import { useState } from 'react'
import https from '../config/axios'


const useRequestsPut = (pathPut, key, idInput) =>{

    const [res, setRes] = useState()
    const [loading, setLoading] = useState()

    const put = async (e) => {

        e.preventDefault()

        if (pathPut == 'logout') {
    
            try {
    
                const response = await https.put(`${pathPut}/${key}`)
                setRes(response.data.message)
    
                if (response.status == 200) {
    
                    if (pathPut == 'logout') {
                        localStorage.removeItem('logged')
                        window.location.replace('/login')
                    }
                    
                }
    
                
            } catch (error) {
                console.log(error)
            }
            
        } else {
    
            const input = document.querySelectorAll(idInput)
            
            const fields = []
            
            for(var i = 0; i < input.length; i++){
                fields.push(input[i].attributes.name.value)
            }
    
            const data = {}
    
            for(var i = 0; i < input.length; i++){
                data[fields[i]] = e.target.elements[fields[i]].value
            }
    
            
            setLoading(true)
    
            try {
    
                const response = await https.put(`${pathPut}/${key}`,{data})
                setRes(response.data.message)
    
                if (response.status == 200) {
    
                    const clearInputs = () =>{
                        input.forEach((el) =>{
                            el.value = ''
                            el.checked = false
                        })
                    }
                    clearInputs()
                    
                }

                if (pathPut == 'notification') {
                    setRes(response.data.amountNotification)
                }

                if (pathPut == 'redefinepassword') {

                    if (response.data.emailTrue) {
                        setRes(response.data.emailTrue)
                    } else {
                        setRes(response.data.message)
                    }
                    
                }
    
                
            } catch (error) {
                console.log(error)
            }
    
            setLoading(false)
            
        }
        
    }
    


    return {put, loading, res}
}


export default useRequestsPut