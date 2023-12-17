import useRequestPost from  '../hooks/useRequestPost'
import useRequestGet from '../hooks/useRequestGet'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import maskCpf from '../utils/maskCpf'
import ContainerRegister from '../styles/ContainerRegister'
import SpinnerButton from '../styles/SpinnerButton'


const Register = () => {

    const [valueCategories, setValueCategories] = useState()

    const pathPost = 'user'
    const idInputPost = 'input[data-user]'
    const pathGet = 'categories'
    const key = ''

    const {post, loading, res} = useRequestPost(pathPost, idInputPost)
    const {data} = useRequestGet(pathGet, key)

    const selectCategories = (e) =>{
        setValueCategories(e.target.value)
    }

    

    return(
        <>
        {/*<Page style={{backgroundColor: 'red', padding: '100px'}}>*/}
        <ContainerRegister>
            <section>
                <form id='form' onSubmit={post}>
                    <h2>Faça seu cadastro</h2>
                    <input className='inputstyle' type="text" data-user name='first_name' placeholder='Nome' required /><br />
                    <input className='inputstyle' type="text" data-user name='last_name' placeholder='Sobrenome' required /><br />
                    <input className='inputstyle' type="email" data-user name='email' placeholder='Email' required /><br />
                    <input className='inputstyle' type="password" data-user name='password' placeholder='Senha' required /><br />
                    <span className='title-input'>Cpf</span>
                    <input className='inputstyle' type="text" data-user onChange={maskCpf} name='cpf' placeholder='000.000.000-00' required /><br />
                    <span className='title-input'>Perfil do instagram</span>
                    <input className='inputstyle' type="text" data-user name='url_profile' placeholder='https://' required /><br />
                    <input className='inputstyle' type="hidden" data-user name='id_categories' defaultValue={valueCategories} required />
                    <span className='title-input'>Categoria do seu perfil</span>
                    <select className='inputstyle' onChange={selectCategories} defaultValue={valueCategories} >
                    <option>selecione</option>
                    {
                        data.map(categories =>(
                            <option value={categories.id} key={categories.id} >{categories.text_categories}</option>
                        ))
                    } 
                    </select>
                    <div className='box-input-radio'>
                        <div>
                            <input type="radio" data-user name='login_type' defaultValue={1} required /><span>Anunciante</span>
                        </div>
                        <div>
                            <input type="radio" data-user name='login_type' defaultValue={0} required /><span>Influencer</span>
                        </div>
                    </div>
                    {
                        loading == true 
                        ? 
                        <button><SpinnerButton /></button>
                        : 
                        <button type='submit'>Cadastrar</button>
                    }
                    {
                        res ? 

                            res == 'Usuário criado com sucesso' 
                            ?
                            <span style={{color: 'green'}}><i className="material-symbols-outlined">error</i>{res}</span>
                            :
                            <span style={{color: 'red'}}><i className="material-symbols-outlined">error</i>{res}</span>  
                        : 
                        <p></p>
                    }
                </form>
                <div className="links">
                    <NavLink to={'/login'}><span><i className="material-symbols-outlined">app_registration</i>Já tenho conta</span></NavLink>
                </div>
            </section>
        </ContainerRegister>
        </>
    )
}

export default Register