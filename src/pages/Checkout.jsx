import { useParams } from "react-router-dom"
import useRequestGet from "../hooks/useRequestGet"
import useRequestsPost from "../hooks/useRequestPost"
import { LoginContext } from '../contexts/loginContext'
import { useContext } from 'react'
import ContainerCheckout from "../styles/ContainerCheckout"
import { NavLink } from "react-router-dom"
import flagCard from '../../public/flagCard.png'
import chipCard from '../../public/chipCard.png'
import maskCpf from '../utils/maskCpf'
import money from '../utils/money'
import useFunctions from "../hooks/useFunctions"
import SpinnerButton from '../styles/SpinnerButton'
import Toastify from '../components/Toastify'


const Checkout = () => {

    document.title = 'Instapay / Checkout'

    const {numberCard, numbercard, cvvCard, cvvcard, monthCard, monthcard, yearCard, yearcard, cardBack, cardFront, actioncard, nameCard, namecard} = useFunctions()


    const {logged: idLogged} = useContext(LoginContext)


    const { id } = useParams()


    const pathGetAccepted = 'accepted'
    const {data: dataAccepted} = useRequestGet(pathGetAccepted)


    const pathPostPayment = 'payments'
    const idInputPost = '#payment'
    const {post, loading, res} = useRequestsPost(pathPostPayment, idInputPost)


    const pathGetPayment = 'payments'
    const {data: dataPayment} = useRequestGet(pathGetPayment)


    const foundAccepted = dataAccepted.filter(accepted =>{
        return accepted.id == id
    })

    
    dataPayment.filter(payment =>{
        if (payment.id_accepted == id) {
            window.location.replace('/')
        }
    })

    return(
        <>
        <ContainerCheckout card={actioncard == false ? 'false' : 'true'}>
            {
                foundAccepted.map(accepted =>(
                    <div className='header-proposal' key={accepted.id}>
                        <NavLink to={`/proposal/${accepted.id_proposal}`}>
                            <span className="material-symbols-outlined">arrow_back</span>
                        </NavLink>
                        <NavLink to={`/proposal/${accepted.id_proposal}`}><h4>Voltar a proposta</h4></NavLink>
                    </div>
                ))
            }
            {
                foundAccepted.map(accepted =>(
                    <main key={accepted.id}>
                        <div className='box-form'>
                            <form id='form' onSubmit={post}>
                                <input className='inputstyle' type="hidden" id='payment' name='id_accepted' defaultValue={accepted.id} placeholder='id_accepted' />
                                <input className='inputstyle' type="hidden" id='payment' name='id_accepted_receiver' defaultValue={accepted.advertiser.id} placeholder='id_accepted_receiver' />
                                <input className='inputstyle' type="hidden" id='payment' name='payment_value' defaultValue={accepted.proposal.proposal_value} placeholder='payment_value' />
                                <input className='inputstyle' type="hidden" id='payment' name='id_user' defaultValue={idLogged} placeholder='' />
                                <span>Nome no cartão</span>
                                <input className='inputstyle' type="text" onChange={nameCard} id='payment' name='full_name' placeholder='Nome escrito no cartao' /><br />
                                <span>Cpf</span>
                                <input className='inputstyle' onChange={maskCpf} type="text" id='payment' name='cpf' placeholder='000.000.000-00' /><br />
                                <span>Número do cartão</span>
                                <input className='inputstyle' type="text" id='payment' onChange={numberCard} name='card_number' placeholder='Número no cartão' /><br />
                                <span>CVV</span>
                                <input className='inputstyle' onClick={cardBack} onBlur={cardFront} onChange={cvvCard} type="text" id='payment' name='security_code' placeholder='000' /><br />
                                <span>Mês</span>
                                <input className='inputstyle' type="text" id='payment' onChange={monthCard} name='month' placeholder='00' /><br />
                                <span>Ano</span>
                                <input className='inputstyle' type="text" id='payment' onChange={yearCard} name='year' placeholder='00' /><br />
                                {
                                    loading == true 
                                    ? 
                                    <button><SpinnerButton /></button>
                                    : 
                                    <button type='submit'>Pagar</button>
                                }
                            </form>
                            {res ? <Toastify action='true' mensage={res} /> : <p></p>}
                        </div>
                        <div className='box-info'>
                            <div className='info'>
                                <h2>Proposta: {accepted.proposal.title_proposal}</h2>
                                <h3>Influencer: {accepted.advertiser.first_name} {accepted.advertiser.last_name}</h3>
                                <h4>{money(accepted.proposal.proposal_value)}</h4>
                            </div>
                            <div className='container-card'>
                                <div className='card'>
                                    <div className='front'>
                                        <div>
                                            <img className='flag-card' src={flagCard} alt="" />
                                            <img className='chip-card' src={chipCard} alt="" />
                                        </div>
                                        <span className='number'>{numbercard}</span><br />
                                        <small className='name'>{namecard}</small><br />
                                        <small className='date'>{monthcard}/{yearcard}</small>
                                    </div>
                                    <div className='back'>
                                        <div className='faixa'></div>
                                        <small className='cvv'>CVV</small>
                                        <div className='box-cvv'>
                                            <small className='cvv-number'>{cvvcard}</small>
                                        </div>
                                        <img className='flag-card-back' src={flagCard} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                ))
            }
        </ContainerCheckout>
        </>
    )
}

export default Checkout