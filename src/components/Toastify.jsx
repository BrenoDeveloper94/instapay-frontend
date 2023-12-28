import BoxToastify from "../styles/BoxToastify"
import useFunctions from "../hooks/useFunctions"

const Toastify = ({action, mensage}) => {

    const {toastifyclose, closetoas} = useFunctions(action)

    return(
        <>
        <BoxToastify closetoas={closetoas == false ? 'false' : 'true'}>
            <div className='toastify-content' style={{backgroundColor: mensage == 'Algo deu errado' || mensage == 'Esse título já está em uso, digite outro' ? 'red' : 'green'}}>
            <i className="material-symbols-outlined icon-close" onClick={toastifyclose}>close</i>
                <div className='message-content'>
                    <i className="material-symbols-outlined icon-message" style={{backgroundColor: mensage == 'Algo deu errado' || mensage == 'Esse título já está em uso, digite outro' ? 'red' : 'green', color: '#fff'}}>{mensage == 'Algo deu errado' || mensage == 'Esse título já está em uso, digite outro' ? 'error' : 'check_circle'}</i>
                    <span>{mensage}</span>
                </div>
            <div className='progress'></div>
            </div>
        </BoxToastify>
        </>
    )
}

export default Toastify