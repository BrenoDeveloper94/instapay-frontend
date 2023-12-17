import useRequestGet from '../hooks/useRequestGet'
import {NavLink, useParams} from 'react-router-dom'
import useRequestsPost from '../hooks/useRequestPost'
import { useContext } from 'react'
import { LoginContext } from '../contexts/loginContext'
import Article from '../styles/Article'
import Aside from '../styles/Aside'
import BoxProposalSingle from '../styles/BoxProposalSingle'
import BlockProposalAside from '../styles/BlockProposalAside'
import BoxUsersComponent from '../components/BoxUsersComponent'
import Spinner from '../styles/Spinner'
import ProfilePhoto from '../../public/userprofile.jpg'
import SpinnerButton from '../styles/SpinnerButton'
import Toastify from '../components/Toastify'
import BoxUsers from '../styles/BoxUsers'
import dates from '../utils/dates'
import money from '../utils/money'


const Proposal = () => {


    const { id } = useParams()
    const key = id


    const {logged: idLogged} = useContext(LoginContext)
    const logged = idLogged
    

    const pathGetAccepted = 'accepted'
    const {data: dataAccepted, loading: loadingAccepted} = useRequestGet(pathGetAccepted)


    const pathGetProposal = 'proposal'
    const {data: dataProposal, loading: loadingProposal} = useRequestGet(pathGetProposal)


    const pathPost = 'accepted'
    const idInputPost = '#accepted'
    const {post, loading: loadingAcceptedPost, res} = useRequestsPost(pathPost, idInputPost)


    const foundProposal = dataProposal.filter(proposal =>{
        return proposal.id == key
    })


    const foundAccepted = dataAccepted.filter(accepted =>{
        return accepted.id_proposal == key && accepted.id_influenser == logged
    })


    const foundInfluensers = dataAccepted.filter(accepted =>{
        return accepted.id_proposal == key && accepted.id_influenser != logged
    })


    return(
        <>
        <Article>
            <BoxProposalSingle>
                {foundProposal.length == 0 && <div className='box-no-proposal'><p>Nenhuma proposta aqui ainda</p></div>}
            {loadingProposal == true && <div className='box-spinner'><Spinner /></div>}
            {
                foundProposal.map(proposal => (
                    <div key={proposal.id}>
                        <div className='box-img'>
                            <img className='profileImg' src={ProfilePhoto} alt="" />
                        </div>
                        <h2 key={proposal.id}>{proposal.title_proposal}</h2>
                        <small>{dates.dateCompare(proposal.created_at)}</small>
                        <p>{proposal.description}</p>
                        <div className='box-info'>
                            <i className="material-symbols-outlined">category</i>
                            <span>Categoria: <strong>{proposal.categories.text_categories}</strong></span>
                            <i className="material-symbols-outlined">category</i>
                            {
                                foundInfluensers.length > 0 
                                ?
                                <span><strong>{foundInfluensers.length}</strong> Interessado{foundInfluensers.length > 1 && 's'} nessa proposta</span>
                                :
                                <span>Ninguem aceitou essa proposta ainda</span>
                            }
                            
                        </div>
                        {
                            <form id='form' onSubmit={post}>
                                <input type="hidden" id='accepted' name='id_influenser' defaultValue={logged} /><br />
                                <input type="hidden" id='accepted' name='id_proposal' defaultValue={proposal.id} /><br />
                                <span>Oferta:</span>
                                <div>
                                    <div className='box-call-to-action'>
                                        <h1>{money(proposal.proposal_value)}</h1>
                                        {
                                            proposal.user.id != logged ? 
                                            <>
                                                {
                                                    foundAccepted.length == 1 || res == 'Proposta aceita com sucesso'
                                                    ?
                                                    <p className='box_proposal-accepted'>Você já aceitou esta proposta
                                                        <i className="material-symbols-outlined">check_circle</i>
                                                    </p>
                                                    :
                                                    loadingAcceptedPost == true ? 
                                                    <button type='submit'><SpinnerButton /></button> : 
                                                    <button type='submit'>Aceitar Proposta</button>
                                                }
                                                {res ? <Toastify action='true' mensage={res} /> : <p></p>}
                                            </>
                                            : 
                                            <>
                                            {
                                                proposal.status_proposal == 1
                                                ? 
                                                <p className='box_proposal-sell' style={{color: 'green', fontWeight: 'bold'}}>Proposta paga
                                                    <i style={{backgroundColor: 'green', color: 'white'}} className="material-symbols-outlined">paid</i>
                                                </p>
                                                :
                                                <p className='box_proposal-sell'>Feche negócio com alguem
                                                    <i className="material-symbols-outlined">sell</i>
                                                </p>
                                            }
                                            </>
                                        } 
                                    </div>
                                </div>
                            </form>
                        }
                    </div>
                ))
            }
            </BoxProposalSingle>
        </Article>
        <Aside>
            <BoxUsers>
                <h3 style={{marginBottom: '50px'}}>Aceitaram essa proposta</h3>
                {
                    foundInfluensers.length == 0 && <p style={{textAlign: 'center'}}>Ninguem aceitou essa proposta ainda</p>
                }
                {loadingAccepted == true ? <div className='box-spinner'><Spinner /></div> : <p></p>}
                {
                    foundInfluensers.map(influensers =>(
                        foundProposal.map(proposal =>(
                            <BoxUsersComponent key={proposal.id}
                            link='none'
                            button={
                                proposal.status_proposal == 1 ?
                                'none'
                                :
                                'flex'
                            }
                            text_button={
                                proposal.user.id == logged ?
                                'Fechar negócio'
                                : 
                                'Visitar'
                            }
                            path={
                                proposal.user.id == logged ?
                                `/checkout/${influensers.id}`
                                : 
                                `/user/profile/${influensers.advertiser.id}`
                            }
                            name={influensers.advertiser.first_name}
                            email={influensers.advertiser.email}
                            logged={influensers.advertiser.logged}
                            last_acess={influensers.advertiser.last_acess}
                        />
                        ))
                    ))
                }
            </BoxUsers>
        </Aside>
        </>
    )
}

export default Proposal