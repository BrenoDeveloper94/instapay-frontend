import ContainerThanks from "../styles/ContainerThanks"


const Thanks = () => {

    localStorage.removeItem('idAccepted')

    return(
        <>
        <ContainerThanks>
            <i className="material-symbols-outlined">check_circle</i>
            <h1>Pagamento realizado com sucesso</h1>
        </ContainerThanks>
        </>
    )
}

export default Thanks