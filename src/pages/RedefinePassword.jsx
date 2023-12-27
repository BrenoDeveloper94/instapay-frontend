import { NavLink } from 'react-router-dom'
import useRequestsPut from '../hooks/useRequestPut'
import ContainerResetPassword from '../styles/ContainerResetPassword'
import SpinnerButton from '../styles/SpinnerButton'


const RedefinePassword = () => {

    document.title = 'Instapay / Redefinir senha'


    const pathPut = 'redefinepassword'
    const key = ''
    const idInputPut = '#redefinepassword'
    const {put, loading, res} = useRequestsPut(pathPut, key, idInputPut)


    return(
        <>
        <ContainerResetPassword>
            <section>
                <form id='form' onSubmit={put}>
                    <h2>Redefinição de senha</h2>
                    {
                        res && res == true
                        ?    
                        <div className='mensage-success'>
                            <i className="material-symbols-outlined">check_circle</i>
                            <span>Te enviamos uma senha temporaria, use ela pra logar e mudar a sua senha</span>
                        </div>
                        :
                        <div><span className='title-input'>Digite seu email cadastrado no sistema</span>
                            <input className='inputstyle' type="email" id='redefinepassword' name='email' placeholder='Email' required /><br />
                            {
                                loading == true 
                                ? 
                                <button><SpinnerButton /></button>
                                : 
                                <button type='submit'>Redefinir<i className="material-symbols-outlined">lock_reset</i></button>
                            }
                            {
                                res ? 
        
                                    res != 'Email não encontrado' 
                                    ?
                                    <span style={{color: 'green'}}><i className="material-symbols-outlined">error</i>{res}</span>
                                    :
                                    <span style={{color: 'red'}}><i className="material-symbols-outlined">error</i>{res}</span>  
                                : 
                                <p></p>
                            }
                        </div>
                    }
                </form>
                <div className="links">
                    <NavLink to={'/login'}><span><i className="material-symbols-outlined">login</i>Já lembrei minha senha</span></NavLink>
                </div>
            </section>
        </ContainerResetPassword>
        </>
    )
}

export default RedefinePassword