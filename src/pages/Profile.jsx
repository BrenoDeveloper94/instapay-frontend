import { LoginContext } from '../contexts/loginContext'
import { useContext, useState } from 'react'
import useRequestGet from '../hooks/useRequestGet'
import useRequestPost from  '../hooks/useRequestPost'
import useRequestsPut from '../hooks/useRequestPut'
import ContainerProfileSingle from '../styles/ContainerProfileUser'
import { NavLink } from 'react-router-dom'
import maskCpf from '../utils/maskCpf'
import SpinnerButton from '../styles/SpinnerButton'
import Toastify from '../components/Toastify'
import ContainerProfileItem from '../styles/ContainerProfileItem'


const Profile = () => {

    document.title = 'Instapay / Perfil'

    const {logged: idLogged} = useContext(LoginContext) // Recebe o id do usuário logado
    const [valueCategories, setValueCategories] = useState()


    const pathGetCategories = 'categories'
    const keyCategories = ''
    const {data: dataCategories} = useRequestGet(pathGetCategories, keyCategories)


    const pathGetUser = 'user'
    const key = idLogged
    const {data: dataUser} = useRequestGet(pathGetUser, key)


    const pathGetBankAccount = 'bankaccount'
    const {data: dataBankAccount} = useRequestGet(pathGetBankAccount, key)


    const pathPost = 'bankaccount'
    const idInputPost = '#create_bankaccount'
    const {post: postBankAccount, loading: loadingBankAccountPost, res: resBankAccount} = useRequestPost(pathPost, idInputPost)

    
    const pathPutUser = 'user'
    const idInputPutUser = '#update_profile'
    const {put: putUser, loading: loadingUserUpdate, res: resUserUpdate} = useRequestsPut(pathPutUser, key, idInputPutUser) 
    
    
    const pathPutBankAccount = 'bankaccount'
    const idInputPutBankAccount = '#create_bankaccount'
    const {put: putBankAccount, loading: loadingBankAccountUpdate, res: resBankAccountUpdate} = useRequestsPut(pathPutBankAccount, key, idInputPutBankAccount) 


    const selectCategories = (e) =>{
        setValueCategories(e.target.value)
    }

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
        <ContainerProfileSingle>
            <div className='header-proposal'>
                <NavLink to={'/'}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </NavLink>
                <NavLink to={'/'}><h4>Voltar a home</h4></NavLink>
            </div>
            <ContainerProfileItem>
                <h2>Configurações</h2>
                <NavLink to={'/profile/user'}>
                    <section>
                        <div>
                            <i className="material-symbols-outlined iconprimary">Roofing</i>
                            <span>Informações do usuário</span>
                        </div>
                        <i className="material-symbols-outlined iconsecondary">chevron_right</i>
                    </section>
                </NavLink>
                <NavLink to={'/profile/bank-account'}>
                    <section>
                        <div>
                            <i className="material-symbols-outlined iconprimary">Roofing</i>
                            <span>Dados bancários</span>
                        </div>
                        <i className="material-symbols-outlined iconsecondary">chevron_right</i>
                    </section>
                </NavLink>
            </ContainerProfileItem>
        </ContainerProfileSingle> 
        </>
    )
}

export default Profile