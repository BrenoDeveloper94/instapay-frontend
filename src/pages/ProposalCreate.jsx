import useRequestPost from  '../hooks/useRequestPost'
import useRequestGet from '../hooks/useRequestGet'
import { useContext, useState } from 'react'
import { LoginContext } from '../contexts/loginContext'
import ContainerCreateProposal from '../styles/ContainerCreateProposal'
import ProfilePhoto from '../../public/profileNot.png'
import { NavLink } from 'react-router-dom'
import SpinnerButton from '../styles/SpinnerButton'
import Toastify from '../components/Toastify'


const ProposalCreate = () => {

    document.title = 'Instapay / Criar proposta'


    const [valueCategories, setValueCategories] = useState()

    const {logged: idLogged} = useContext(LoginContext)

    const pathGet = 'user'
    const {data} = useRequestGet(pathGet)


    const pathGetCategories = 'categories'
    const key = ''
    const {data: dataCategories} = useRequestGet(pathGetCategories, key)


    const pathPost = 'proposal'
    const idInputPost = '#proposal'
    const {post, loading, res} = useRequestPost(pathPost, idInputPost)

    const foundUsers = data.filter(users =>{
        return users.id != idLogged
    })


    const selectCategories = (e) =>{
        setValueCategories(e.target.value)
    }


    return(
        <>
        <ContainerCreateProposal>
            <header>
                <div className='header-proposal'>
                    <NavLink to={'/'}>
                        <span className="material-symbols-outlined">arrow_back</span>
                    </NavLink>
                    <NavLink to={'/'}><h4>Voltar a home</h4></NavLink>
                </div>
                <h2>Criar proposta</h2>
                <section>
                    <form id='form' onSubmit={post}>
                        <div className='content-inputs' id='content-inputs'>
                            <input type="hidden" id='proposal' name='id_user' placeholder='id do usuario' defaultValue={idLogged} /><br />
                            <input className='input-create-proposal' type="text" id='proposal' name='title_proposal' placeholder='Título' /><br />
                            <input className='input-create-proposal' type="text" id='proposal' name='description' placeholder='Descrição' /><br />
                            <input className='input-create-proposal' type="number" id='proposal' name='proposal_value' placeholder='Quanto você oferta?' /><br />
                            <input type="hidden" id='proposal' name='id_categories' defaultValue={valueCategories} required />
                            <select className='input-create-proposal' onChange={selectCategories} defaultValue={valueCategories} >
                                <option>select</option>
                                {
                                    dataCategories.map(categories =>(
                                        <option value={categories.id} key={categories.id} >{categories.text_categories}</option>
                                    ))
                                }
                            </select>
                            <div className='content-buttons'>
                                <a href="#content-influencers">Próximo
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </a>
                            </div>
                        </div>
                        <div className='content-influencers' id='content-influencers'>
                            <h3 className='subtitle-influencers'>Clique em quem você quer notificar para ver sua proposta</h3>
                            <div className='content-base-users'>
                                {
                                    foundUsers.map(users =>(
                                        <article key={users.id}>
                                            <label>
                                            <input type="checkbox" id='proposal' placeholder='id_recipient' name='recept' defaultValue={users.id} /><br />
                                                <div className='container-users'>
                                                    {
                                                        users.profile_image
                                                        ?
                                                        <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${users.profile_image}`} alt="" />
                                                        :
                                                        <img className='profileImg' src={ProfilePhoto} alt="" />
                                                    }
                                                    <div>
                                                        <span>{users.first_name} {users.last_name}</span>
                                                        <small>{users.email}</small>
                                                    </div>
                                                </div>
                                            </label>
                                        </article>
                                    ))
                                }
                            </div>
                            <div className='content-buttons'>
                                <a href="#content-inputs">
                                    <span className="material-symbols-outlined">chevron_left</span>Voltar
                                </a>
                                <a href="#content-submit">Seguir sem notificar
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </a>
                            </div>
                        </div>
                        <div className='content-submit' id='content-submit'>
                            {
                            loading == true ?
                            <button type='submit'><SpinnerButton /></button>
                            :
                            <button type='submit'>Criar proposta</button>
                            }
                            <div className='content-buttons'>
                                <a href="#content-influencers">
                                    <span className="material-symbols-outlined">chevron_left</span>Voltar
                                </a>
                            </div>
                        </div>
                        <div className='content-buttons'>
                            <a href="#content-submit">Voltar
                                <span className="material-symbols-outlined">chevron_left</span>
                            </a>
                        </div>
                    </form>
                    <p>{res}</p>
                    {res ? <Toastify action='true' mensage={res} /> : <p></p>}
                </section>
            </header>
        </ContainerCreateProposal>
        </>
    )
}

export default ProposalCreate