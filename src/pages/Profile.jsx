import ContainerProfileSingle from '../styles/ContainerProfileUser'
import { NavLink } from 'react-router-dom'
import ContainerProfileItem from '../styles/ContainerProfileItem'


const Profile = () => {

    document.title = 'Instapay / Perfil'


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