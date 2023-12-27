import { useContext } from 'react'
import useRequestGet from  '../hooks/useRequestGet'
import { LoginContext } from '../contexts/loginContext'
import ContainerNotifications from '../styles/ContainerNotifications'
import ProfilePhoto from '../../public/profileNot.png'
import { NavLink } from 'react-router-dom'
import Spinner from '../styles/Spinner'
import dates from '../utils/dates'
import money from '../utils/money'


const Notifications = () => {

    document.title = 'Instapay / Notificações'

    const {logged: idLogged} = useContext(LoginContext)


    const pathGet = 'notification'
    const key = idLogged
    const {data, loading} = useRequestGet(pathGet, key)


    return(
        <>
        <ContainerNotifications>
            <header>
                <h1>Notificações</h1>
            </header>
            {
                loading == true 
            ? 
                <section style={{alignItems: 'center'}}>
                    <Spinner />
                </section>
            : 
                data.map(notification =>(
                    <section key={notification.id}>
                        <div className='box-user'>
                            {
                                notification.proposal.user.profile_image
                                ?
                                <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${notification.proposal.user.profile_image}`} alt="" />
                                :
                                <img className='profileImg' src={ProfilePhoto} alt="" />
                            }
                            <div>
                                <span>{notification.proposal.user.first_name} {notification.proposal.user.last_name}</span>
                                <small>{dates.dateCompare(notification.created_at)}</small>
                            </div>
                        </div>
                        <NavLink to={`/proposal/${notification.proposal.id}`}>
                            <article>
                                <p>Olá, acabei de criar uma proposta no valor de <strong>{money(notification.proposal.proposal_value)}</strong> reais, e gostaria de lhe convidar para dá uma olhada.</p>
                            </article>
                        </NavLink>
                    </section>
                ))
            }
        </ContainerNotifications>
        </>
    )
}

export default Notifications