import { LoginContext } from '../contexts/loginContext'
import { useContext, useState } from 'react'
import useRequestPost from  '../hooks/useRequestPost'
import useRequestsPut from '../hooks/useRequestPut'
import ContainerProfileBank from '../styles/ContainerProfileBank'
import useRequestGet from '../hooks/useRequestGet'
import SpinnerButton from '../styles/SpinnerButton'
import Toastify from '../components/Toastify'
import { NavLink } from 'react-router-dom'



const ProfileBank = () => {

    document.title = 'Instapay / Dados bancários'

    const {logged: idLogged} = useContext(LoginContext)


    const pathGetBankAccount = 'bankaccount'
    const key = idLogged
    const {data: dataBankAccount} = useRequestGet(pathGetBankAccount, key)
    
    const foundBankAccount = Object.assign({},dataBankAccount[0])
    

    const pathPost = 'bankaccount'
    const idInputPost = '#create_bankaccount'
    const {post: postBankAccount, loading: loadingBankAccountPost, res: resBankAccount} = useRequestPost(pathPost, idInputPost)


    const pathPutBankAccount = 'bankaccount'
    const idInputPutBankAccount = '#create_bankaccount'
    const {put: putBankAccount, loading: loadingBankAccountUpdate, res: resBankAccountUpdate} = useRequestsPut(pathPutBankAccount, key, idInputPutBankAccount)


    const formSubmit = () =>{

        const form = document.querySelector('.form')

        if (dataBankAccount.length == 0) {
            form.addEventListener('submit', postBankAccount)
        } else {
            form.addEventListener('submit', putBankAccount)
        }
        
    }

    return(
        <>
        <ContainerProfileBank>
            <div className='header-proposal'>
                <NavLink to={'/profile'}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </NavLink>
                <NavLink to={'/profile'}><h4>Configurações</h4></NavLink>
            </div>
            <form id='form' className='form'>
                {
                    dataBankAccount.length == 0 
                    ? 
                    <h2>Adicionar conta bancária</h2>
                    : 
                    <h2>Editar conta bancária</h2>
                }
                <input className='inputstyle' type="hidden" id='create_bankaccount' name='id_user' placeholder='id_user' defaultValue={key} />
                <input className='inputstyle' type="hidden" id='create_bankaccount' name='id_bank' placeholder='id_bank' defaultValue={1} />
                <input className='inputstyle' type="text" id='create_bankaccount' name='agency' placeholder='agency' defaultValue={foundBankAccount.agency} /><br />
                <input className='inputstyle' type="text" id='create_bankaccount' name='agency_digit' placeholder='agency_digit' defaultValue={foundBankAccount.agency_digit} /><br />
                <input className='inputstyle' type="text" id='create_bankaccount' name='account' placeholder='account' defaultValue={foundBankAccount.account} /><br />
                <input className='inputstyle' type="text" id='create_bankaccount' name='account_digit' placeholder='account_digit' defaultValue={foundBankAccount.account_digit} /><br />
                {
                    dataBankAccount.length == 0 
                    ? 
                    <>
                    {loadingBankAccountPost == true ? <button><SpinnerButton /></button> : <button onClick={formSubmit}>Adicionar</button>}
                    </>
                    : 
                    <>
                    {loadingBankAccountUpdate == true ? <button><SpinnerButton /></button> : <button onClick={formSubmit}>Editar</button>}
                    </>
                }
            </form>
            {resBankAccount ? <Toastify action='true' mensage={resBankAccount} /> : <p></p>}
            {resBankAccountUpdate ? <Toastify action='true' mensage={resBankAccountUpdate} /> : <p></p>}
        </ContainerProfileBank>
        </>
    )
}

export default ProfileBank