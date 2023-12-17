import useRequestGet from "../hooks/useRequestGet"


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
        <h1>Confirmation</h1>
        </>
    )
}

export default PayConfirmation