import useRequestGet from '../hooks/useRequestGet'
import { NavLink } from "react-router-dom"
import { LoginContext } from '../contexts/loginContext'
import { useContext } from 'react'
import ContainerUsers from '../styles/ContainerUsers'
import ProfilePhoto from '../../public/profileNot.png'
import BlockUser from '../styles/BlockUser'
import Spinner from '../styles/Spinner'


const Users = () => {

    document.title = 'Instapay / Usuários'


    const {logged: idLogged} = useContext(LoginContext)

    const pathGet = 'user'
    const key = ''
    const {getSearch, data, loading} = useRequestGet(pathGet, key)

    const foundUsers = data.filter(users =>{
        return users.id != idLogged
    })


    return(
        <>
        <ContainerUsers>
            <header>
                <h2>Users</h2>
                <div>
                    <input type="search" placeholder='pesquisar' onKeyDown={getSearch}/>
                    <span className="material-symbols-outlined icon-filter">filter_alt</span>
                </div>
            </header>
            <main>
                {
                    foundUsers.length == 0 &&
                    <section>
                        <p>Sem usuários</p>
                    </section>
                }
                {
                    foundUsers.map(users =>(
                    <BlockUser key={users.id}>
                        {loading == true ? <Spinner /> : <p></p>}
                        <>
                            {
                               users.profile_image
                               ?
                               <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${users.profile_image}`} alt="" />
                               :
                               <img className='profileImg' src={ProfilePhoto} alt="" />
                            }
                            <span>{users.first_name} {users.last_name}</span>
                            <small>{users.email}</small>
                            <div>
                                <small>Categoria: </small>
                                <span>{users.category.text_categories}</span>
                            </div>
                            <div className='box-btns'>
                                <NavLink to={`/user/profile/${users.id}`} className='btn-viewmore'>Ver mais</NavLink>
                                <a href={`${users.url_profile}`} style={{backgroundColor: '#fff', color: '#05f'}} className='btn-viewmore' target='_blank'>Instagram</a>
                            </div>
                        </>
                    </BlockUser>
                    ))
                }
            </main>
        </ContainerUsers>
        </>
    )
}

export default Users