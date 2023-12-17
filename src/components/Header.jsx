import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { LoginContext } from '../contexts/loginContext'
import useRequestsPut from "../hooks/useRequestPut"
import useRequestGet from  '../hooks/useRequestGet'
import Section from "../styles/Section"
import Logo from '../../public/logo.png'
import BoxNotifications from "../styles/BoxNotifications"
import ProfilePhoto from '../../public/userprofile.jpg'
import useFunctions from "../hooks/useFunctions"
import dates from '../utils/dates'


const Header = ({activemenu}) => {

    const {logged: idLogged} = useContext(LoginContext)

    const {actionnotifications, activeNotifications} = useFunctions()

    const pathGet = 'notification'
    const keyGet = idLogged
    const {data, loading} = useRequestGet(pathGet, keyGet)


    const pathPut = 'logout'
    const keyPut = idLogged
    const {put} = useRequestsPut(pathPut, keyPut)


    const pathPutNotification = 'notification'
    const keyPutNotification = idLogged
    const {put: putNotification, res} = useRequestsPut(pathPutNotification, keyPutNotification)


    const foundNotification = data.filter(notification =>{
        return notification.status_view == 0
    })


    return(
        <>
        <Section>
            <NavLink>
                <img className="logoImg" width={140} src={Logo} alt="" />
            </NavLink>
            <NavLink to={'/withdrawals'}>
                <span className="material-symbols-outlined icon">account_balance</span>
            </NavLink>
            <NavLink to={'/payments'}>
                <span className="material-symbols-outlined icon">payments</span>
            </NavLink>
            <NavLink to={'/create/proposal'}>
                <span className="material-symbols-outlined icon">draw</span>
            </NavLink>
            
        </Section>
        <Section style={{justifyContent: 'right'}}>
            <NavLink to={'/withdrawals'}>
                <span className="material-symbols-outlined mobile">account_balance</span>
            </NavLink>
            <NavLink to={'/payments'}>
                <span className="material-symbols-outlined mobile">payments</span>
            </NavLink>
            <NavLink to={'/create/proposal'}>
                <span className="material-symbols-outlined mobile">draw</span>
            </NavLink>
            <span className="material-symbols-outlined icon-desktop" onClick={actionnotifications}>notifications
            {
                foundNotification.length == 0
                ? 
                <p></p>
                :
                res == undefined && <strong className="number-notifications">{foundNotification.length}</strong>
            }
            <BoxNotifications activestylenotifications={activeNotifications == false ? 'false' : 'true'}>
                <h4>Notificações</h4>
                {
                    data.map(notification =>(
                        <div key={notification.id}>
                            <img className="profileImg" src={ProfilePhoto} alt="" />
                            <div onClick={putNotification}>
                                <NavLink to={'/notifications'}>
                                    <div>
                                        <span>{notification.proposal.user.first_name} {notification.proposal.user.last_name}</span>
                                        <small>{dates.dateCompare(notification.created_at)}</small>
                                    </div>
                                    <p>Olá, acabei de criar uma proposta...</p>
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
            </BoxNotifications>
            </span>
            <span className="material-symbols-outlined menu-Icon" onClick={activemenu}>short_text</span>
            <NavLink to={'/profile'}>
                <span className="material-symbols-outlined icon-desktop">account_circle</span>
            </NavLink>
            <span className="material-symbols-outlined icon-desktop" onClick={put}>logout</span>
        </Section>
        </>
    )
}

export default Header