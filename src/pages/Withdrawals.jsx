import { useContext } from 'react'
import useRequestGet from '../hooks/useRequestGet'
import { LoginContext } from '../contexts/loginContext'
import useRequestsPost from '../hooks/useRequestPost'
import { NavLink } from "react-router-dom"
import ContainerWithdrawals from '../styles/ContainerWithdrawals'
import ProfilePhoto from '../../public/profileNot.png'
import Spinner from '../styles/Spinner'
import SpinnerButton from '../styles/SpinnerButton'
import Toastify from '../components/Toastify'
import money from '../utils/money'
import dates from '../utils/dates'
import Pagination from '../components/Pagination'


const Withdrawals = () => {

    document.title = 'Instapay / Saques'


    const {logged: idLogged} = useContext(LoginContext)
    

    const pathGet = 'withdrawal'
    const keyGetWithdrawal = idLogged
    const {paginationNext, paginationBack, count, countrecords, take, data: dataWithdrawal, loading: loadingWithdrawal} = useRequestGet(pathGet, keyGetWithdrawal)


    const pathGetBankbalance = 'bankbalance'
    const keyGetBankbalance = idLogged                       
    const {data: dataBankbalance, loading: loadingBankbalance} = useRequestGet(pathGetBankbalance, keyGetBankbalance)


    const pathGetBankaccount = 'bankaccount'
    const {data: dataBankaccount, loading: loadingBankaccount} = useRequestGet(pathGetBankaccount)


    const pathPost = 'withdrawal'
    const idInputPost = '#withdrawal'
    const {post, loading: loadingPostWithdrawal, res} = useRequestsPost(pathPost, idInputPost)


    const foundBankaccount = dataBankaccount.filter(bankaccount =>{
        return bankaccount.id_user == idLogged
    })

    
    return(
        <>
        {res == 'Solicitação de saque realizado com sucesso' ? <Toastify action='true' mensage={res} /> : <p></p>}
        <ContainerWithdrawals>
            <header>
                <div className='box-value'>
                    <div>
                        <small>Disponível</small>
                        {loadingBankbalance == true ? <div className='spinner-value'></div> : <h2>{money(dataBankbalance)}</h2>}
                    </div>
                </div>
                <div className='box-input'>
                    {
                        loadingBankaccount == true
                        ?
                        <Spinner />
                        :
                    
                        <form id='form' onSubmit={post}>
                            {
                                foundBankaccount.length == 1
                                ?
                                <>
                                <input id='withdrawal' type='hidden' name='id_bank_account' placeholder='id_bank_account' defaultValue={idLogged} />
                                <input id='withdrawal' type='hidden' name='available_value' placeholder='id_bank_account' defaultValue={dataBankbalance} />
                                <input className='inputstyle' id='withdrawal' type='text' name='withdrawals_amount' />
                                {
                                    loadingPostWithdrawal == true 
                                    ? 
                                    <button><SpinnerButton /></button> 
                                    : 
                                    <button type='submit'>Sacar</button>
                                }
                                </>
                                :
                                <div>
                                    <p>Voce precisa cadastrar sua conta bancaria para sacar</p>
                                    <NavLink to={'/profile/bank-account'}><span>Cadastrar conta bancaria</span></NavLink>
                                </div>
                            }
                        </form>   
                    }
                    {
                        res ? 

                            res == 'O valor deve ser igual ou menor que o disponível pra saque' && 
                            <span style={{color: 'red'}}><i className="material-symbols-outlined">error</i>{res}</span>  
                        : 
                        <p></p>
                    }
                </div>
            </header>
            <section>
                { 
                    loadingWithdrawal == true 
                    ? 
                    <article style={{justifyContent: 'center'}}>
                        <Spinner />
                    </article>
                    :
                    dataWithdrawal.length == 0 
                    ?
                    <article>
                        <h3>Nenhum saque realizado ainda</h3>
                    </article>
                    :
                    dataWithdrawal.map(withdrawal =>(
                        <article key={withdrawal.id}>
                            <div className='div-user'>
                                {
                                    withdrawal.bank_account.user.profile_image
                                    ?
                                    <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${withdrawal.bank_account.user.profile_image}`} alt="" />
                                    :
                                    <img className='profileImg' src={ProfilePhoto} alt="" />
                                }
                                <div>
                                    <span>{withdrawal.bank_account.user.first_name} {withdrawal.bank_account.user.last_name}</span>
                                </div>
                            </div>
                            <div className='div-description'><i className="material-symbols-outlined">expand_circle_down</i></div>
                            <span>{money(withdrawal.withdrawals_amount)}</span>
                            <small>{dates.dates(withdrawal.created_at)}</small>
                        </article>
                    ))
                }
                <Pagination 
                    paginationBack={paginationBack}
                    paginationNext={paginationNext}
                    count={count}
                    countrecords={countrecords}
                    take={take}
                    data={dataWithdrawal.length}
                />
            </section>
            </ContainerWithdrawals>
        </>
    )
}

export default Withdrawals