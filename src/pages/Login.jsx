import useRequestsPost from "../hooks/useRequestPost"
import { NavLink} from 'react-router-dom'
import ContainerLogin from "../styles/ContainerLogin"
import SpinnerButton from '../styles/SpinnerButton'

const Login = () => {

    const pathPost = 'login'
    const idInputPost = 'input[data-login]'

    const {post, loading, res} = useRequestsPost(pathPost, idInputPost)

    return(
        <>
        <ContainerLogin>
            <section>
                <form id='form' onSubmit={post}>
                    <h2>Login</h2>
                    <input className='inputstyle' data-login type="email" name="email" placeholder='Email' /><br />
                    <input className='inputstyle' data-login type="password" name="password" placeholder='Senha' /><br />
                    {
                        loading == true 
                        ? 
                        <button><SpinnerButton /></button>
                        : 
                        <button type='submit'>Logar<i className="material-symbols-outlined">login</i></button>
                    }
                    {
                        res ? 

                            res == 'Logado com sucesso' 
                            ?
                            <span style={{color: 'green'}}><i className="material-symbols-outlined">error</i>{res}</span>
                            :
                            <span style={{color: 'red'}}><i className="material-symbols-outlined">error</i>{res}</span>  
                        : 
                        <p></p>
                    }
                </form>
                <div className="links">
                    <NavLink to={'/register'}><span><i className="material-symbols-outlined">app_registration</i>Criar conta</span></NavLink>
                    <NavLink to={'/redefinepassword'}><span><i className="material-symbols-outlined">reset_wrench</i>Esqueci minha senha</span></NavLink>
                </div>
            </section>
        </ContainerLogin>
        </>
    )
}

export default Login