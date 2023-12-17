import Footer from "../styles/Footer"
import { NavLink } from "react-router-dom"
import useRequestsPut from "../hooks/useRequestPut"
import { useContext, useState } from "react"
import { LoginContext } from '../contexts/loginContext'


const NavFooter = () => {


    const {logged: idLogged} = useContext(LoginContext)


    const pathPut = 'logout'
    const keyPut = idLogged
    const {put} = useRequestsPut(pathPut, keyPut)


    return(
        <>
        <Footer>
            <NavLink to={'/proposal'}>
                <span className="material-symbols-outlined">work</span>
            </NavLink>
            <NavLink to={'/notifications'}>
                <span className="material-symbols-outlined">notifications</span>
            </NavLink>
            <NavLink to={'/profile'}>
                <span className="material-symbols-outlined">account_circle</span>
            </NavLink>
            <span className="material-symbols-outlined" onClick={put}>logout</span>
        </Footer>
        </>
    )
}

export default NavFooter