import { NavLink } from "react-router-dom"
import ContainerProfileUser from "../styles/ContainerProfileUser"
import { LoginContext } from '../contexts/loginContext'
import { useContext, useEffect, useState } from 'react'
import useRequestsPut from '../hooks/useRequestPut'
import useRequestGet from '../hooks/useRequestGet'
import useRequestsPost from '../hooks/useRequestPost'
import maskCpf from '../utils/maskCpf'
import SpinnerButton from '../styles/SpinnerButton'
import Spinner from "../styles/SpinnerButton"
import Toastify from '../components/Toastify'
import ProfilePhoto from '../../public/profileNot.png'
import https from '../config/axios'
import useFunctions from "../hooks/useFunctions"

const ProfileUser = () => {

    const {logged: idLogged} = useContext(LoginContext)
    const [valueCategories, setValueCategories] = useState()


    const pathGetUser = 'user'
    const key = idLogged
    const {data: dataUser, loading: loadingUser} = useRequestGet(pathGetUser, key)


    const pathGetCategories = 'categories'
    const keyCategories = ''
    const {data: dataCategories} = useRequestGet(pathGetCategories, keyCategories)


    const pathPutUser = 'user'
    const idInputPutUser = 'input[data-update_profile]'
    const {put: putUser, loading: loadingUserUpdate, res: resUserUpdate} = useRequestsPut(pathPutUser, key, idInputPutUser) 


    const selectCategories = (e) =>{
        setValueCategories(e.target.value)
    }

    const idUserUpload = idLogged
    const {formUpload, res: resUpload, loading: loadingUpload} = useFunctions(idUserUpload)


    return(
        <>
        <ContainerProfileUser>
            <div className='header-proposal'>
                <NavLink to={'/profile'}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </NavLink>
                <NavLink to={'/profile'}><h4>Configurações</h4></NavLink>
            </div>
            <section>
                <div className='box-circle-profile'>
                    <div className='circle-profile'>
                        {
                            dataUser.profile_image
                            ?
                            loadingUpload == true ? <Spinner /> : <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${dataUser.profile_image}`} alt="" />
                            :
                            loadingUpload == true ? <Spinner /> : <img className='profileImg' src={ProfilePhoto} alt="" />
                        }
                    </div>
                    <span>Sua foto</span>
                </div>
                <div>
                    <form>
                        <input type='file' data-upload onChange={formUpload} name='file' />
                    </form>   
                </div>
            </section>
            {resUpload ? <Toastify action='true' mensage={resUpload} /> : <p></p>}
            <form id='form' onSubmit={putUser}>
                <h2>Editar perfil</h2>
                <input className='inputstyle' type="text" data-update_profile name='first_name' placeholder='Nome' defaultValue={dataUser.first_name} required /><br />
                <input className='inputstyle' type="text" data-update_profile name='last_name' placeholder='Sobrenome' defaultValue={dataUser.last_name} required /><br />
                <input className='inputstyle' type="text" data-update_profile name='full_name' placeholder='Nome completo' defaultValue={dataUser.full_name} required /><br />
                <input className='inputstyle' type="email" data-update_profile name='email' placeholder='Email' defaultValue={dataUser.email} required /><br />
                <input className='inputstyle' type="text" data-update_profile name='login' placeholder='Login' defaultValue={dataUser.login} required /><br />
                <input className='inputstyle' type="password" data-update_profile name='password' placeholder='Senha' defaultValue={dataUser.password} required /><br />
                <div className='box-input-radio'>
                    <div>
                        <input type="radio" data-update_profile name='login_type' defaultValue={1} required  /><span>Anunciante</span><br />
                    </div>
                    <div>
                        <input type="radio" data-update_profile name='login_type' defaultValue={0} required /><span>Influencer</span><br />
                    </div>
                </div>
                <input className='inputstyle' type="text" onChange={maskCpf} data-update_profile name='cpf' placeholder='cpf' defaultValue={dataUser.cpf} required /><br />
                <input type="hidden" data-update_profile name='id_categories' defaultValue={valueCategories} required />
                <select className='inputstyle' onChange={selectCategories} defaultValue={valueCategories} >
                    <option>selecione</option>
                    {
                        dataCategories.map(categories =>(
                            <option value={categories.id} key={categories.id} >{categories.text_categories}</option>
                        ))
                    } 
                </select>
                {loadingUserUpdate == true 
                ? 
                <button type='submit'><SpinnerButton /></button>
                :
                <button type='submit'>Atualizar</button>
                }
            </form>
            {resUserUpdate ? <Toastify action='true' mensage={resUserUpdate} /> : <p></p>}
        </ContainerProfileUser>
        </>
    )
}

export default ProfileUser