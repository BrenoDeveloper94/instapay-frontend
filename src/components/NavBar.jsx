import Logo from '../../public/logo.png'
import { NavLink } from "react-router-dom"
import Section from '../styles/Section'
import Article from '../styles/Article'
import Menu from '../styles/Menu'


const NavBar = () => {
    return(
        <>
        <NavLink>
            <img width={140} src={Logo} alt="" />
        </NavLink>
        <Menu>
            <small>Menu</small>
            <NavLink to={'/proposal'}>
                <div>
                    <i className="material-symbols-outlined icon-work">work</i>
                    <span>Minhas propostas</span>
                </div>
            </NavLink>
            <NavLink to={'/withdrawals'}>
                <div>
                    <i className="material-symbols-outlined icon-account_balance">account_balance</i>
                    <span>Saques</span>
                </div>
            </NavLink>
            <NavLink to={'/payments'}>
                <div>
                    <i className="material-symbols-outlined icon-payments">payments</i>
                    <span>Pagamentos</span>
                </div>
            </NavLink>
        </Menu>
        </>
    )
}

export default NavBar