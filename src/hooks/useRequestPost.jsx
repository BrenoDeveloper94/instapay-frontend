import { useState } from 'react'
import https from '../config/axios'


const useRequestsPost = (pathPost, idInputPost) =>{

    const [res, setRes] = useState()
    const [userLogged, setUserLogged] = useState([])
    const [loading, setLoading] = useState()

    const post = async (e) => {

        e.preventDefault()

        const recept = document.getElementsByName('recept')

        const arrayRecept = []
        
        recept.forEach((el) =>{
            if (el.checked) {
                arrayRecept.push(parseInt(el.value))
            }
        })
        

        const input = document.querySelectorAll(idInputPost)
        
        
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

            const response = await https.post(pathPost,{
                data, arrayRecept
            })
            setRes(response.data.message)

            if (response.status == 201) {

                const clearInputs = () =>{
                    input.forEach((el) =>{
                        el.value = ''
                        el.checked = false
                    })
                }
                clearInputs()
                
            }

            if (pathPost == 'login') {

                if (response.data.userLogged != undefined) {
                    setUserLogged(response.data.userLogged)
                    localStorage.setItem('logged', response.data.userLogged.id_user)
                    window.location.replace('/')
                }
                
            }

            if (pathPost == 'payments' && response.status == 201) {
                localStorage.setItem('idAccepted', response.data.id_accepted)
                window.location.replace('/payment/confirmation')
            }

            if (pathPost == 'user' && response.status == 201) {
                window.location.replace('/login')
            }
            
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
        
    }
    


    return {post, loading, res}
}


export default useRequestsPost