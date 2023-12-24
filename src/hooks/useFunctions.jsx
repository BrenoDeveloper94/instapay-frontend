import { useState } from "react"
import maskNumberCard from '../utils/maskNumberCard'
import maskCvv from '../utils/maskCvv'
import maskMonth from '../utils/maskMonth'
import maskYear from '../utils/maskYear'
import https from '../config/axios'



const useFunctions = (action) => {

    const [activemenu, setActivemenu] = useState(false) 
    const actionmenu = () => {
        setActivemenu(!activemenu)
    }

    const [activeNotifications, setActiveNotifications] = useState(false) 
    const actionnotifications = () => {
        setActiveNotifications(!activeNotifications)
    }

    const [closetoas, setClosetoas] = useState(action)
    const toastifyclose = () => {
        setClosetoas(!closetoas)
    }

    setTimeout(() =>{
        setClosetoas(false)
    },4000)


    const [numbercard, setNumbercard] = useState('')
    const numberCard = (e) => {
        setNumbercard(e.target.value)
    
        var reOne = /[a-z]/g
        var reTwo = /[0-9a-zA-Z]/g
        var foundRegexOne = reOne.test(e.target.value)
        var foundRegexTwo = reTwo.test(e.target.value)
        

        if (foundRegexOne == true || foundRegexTwo == false) {
            setNumbercard('')
        }

        maskNumberCard()
    }

    const [cvvcard, setCvvcard] = useState('')
    const cvvCard = (e) => {
        setCvvcard(e.target.value)
    
        var reOne = /[a-z]/g
        var reTwo = /[0-9a-zA-Z]/g
        var foundRegexOne = reOne.test(e.target.value)
        var foundRegexTwo = reTwo.test(e.target.value)
        

        if (foundRegexOne == true || foundRegexTwo == false) {
            setCvvcard('')
        }

        maskCvv()
        
    }

    const [monthcard, setMonthcard] = useState('')
    const monthCard = (e) => {
        setMonthcard(e.target.value)
    
        var reOne = /[a-z]/g
        var reTwo = /[0-9a-zA-Z]/g
        var foundRegexOne = reOne.test(e.target.value)
        var foundRegexTwo = reTwo.test(e.target.value)
        

        if (foundRegexOne == true || foundRegexTwo == false) {
            setMonthcard('')
        }

        maskMonth()
        
    }

    const [yearcard, setYearcard] = useState('')
    const yearCard = (e) => {
        setYearcard(e.target.value)
    
        var reOne = /[a-z]/g
        var reTwo = /[0-9a-zA-Z]/g
        var foundRegexOne = reOne.test(e.target.value)
        var foundRegexTwo = reTwo.test(e.target.value)
        

        if (foundRegexOne == true || foundRegexTwo == false) {
            setYearcard('')
        }

        maskYear()
        
    }

    const [actioncard, setActioncard] = useState(false)
    const cardBack = () => {
        setActioncard(true)
    }
    const cardFront = () => {
        setActioncard(false)
    }

    const [namecard, setNamecard] = useState('')
    const nameCard = (e) => {
        setNamecard(e.target.value)
    }

    const [res, setRes] = useState()
    const [loading, setLoading] = useState()

    const formUpload = async (e) =>{
        e.preventDefault()

        var img = e.target.files[0]
        const formData = new FormData()
        formData.append('file', img)

        setLoading(true)

        try {

            const response = await https.put(`upload/${action}`, formData)
            setRes(response.data.message)
            
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }


    return {
        actionmenu, 
        activemenu,
        actionnotifications,
        activeNotifications,
        toastifyclose,
        closetoas,
        numberCard,
        numbercard,
        cvvCard,
        cvvcard,
        monthCard,
        monthcard,
        yearCard,
        yearcard,
        cardBack,
        cardFront,
        actioncard,
        nameCard,
        namecard,
        formUpload,
        res,
        loading
    }
}

export default useFunctions