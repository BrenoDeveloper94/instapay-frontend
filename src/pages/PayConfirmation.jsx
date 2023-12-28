import useRequestGet from "../hooks/useRequestGet"
import ContainerThanks from "../styles/ContainerThanks"
import Spinner from "../styles/Spinner"


const PayConfirmation = () => {

    const pathGetPayment = 'payments'
    const {data, loading} = useRequestGet(pathGetPayment)


    const idAccepted = localStorage.getItem('idAccepted')


    if (loading == false) {

        const foundPayment = data.filter(payment =>{
            return payment.id_accepted == idAccepted
        })
    
        if (foundPayment.length != 0) {
            window.location.replace(`/thanks/${idAccepted}`)
        } else {
            window.location.replace('/')
        }
        
    }


    return(
        <>
        <ContainerThanks>
            <Spinner />
        </ContainerThanks>
        </>
    )
}

export default PayConfirmation