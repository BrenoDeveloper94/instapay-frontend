import { useContext } from 'react'
import useRequestGet from '../hooks/useRequestGet'
import { LoginContext } from '../contexts/loginContext'
import ContainerPayments from '../styles/ContainerPayments'
import ProfilePhoto from '../../public/profileNot.png'
import Spinner from '../styles/Spinner'
import dates from '../utils/dates'
import money from '../utils/money'
import Pagination from '../components/Pagination'


const Payments = () => {

    const {logged: idLogged} = useContext(LoginContext)


    const pathGet = 'payments'
    const key = idLogged
    const {paginationNext, paginationBack, count, countrecords, take, data, loading} = useRequestGet(pathGet, key)


    const pathGetUser = 'user'
    const keyUser = idLogged
    const {data: dataUser, loading: loadingUser} = useRequestGet(pathGetUser, keyUser)


    return(
        <>
        <ContainerPayments>
            <section>
                <h2>Pagamentos</h2>
                {
                    loading == true 
                    ? 
                    <article style={{justifyContent: 'center'}}>
                        <Spinner />
                    </article>
                    : 
                    data.length == 0
                    ?
                    <article style={{justifyContent: 'center', padding: '40px'}}>
                        <h3>Nenhum pagamento realizado ou recebido ainda</h3>
                    </article>
                    :
                    data.map(payments =>(
                        <article key={payments.id}>
                            <div className='div-user'>
                                <img className='profileImg' src={ProfilePhoto} alt="" />
                                <div>
                                    <span>{dataUser.first_name} {dataUser.last_name}</span>
                                </div>
                            </div>
                            {
                                payments.accepted.id_influenser == idLogged
                                ?
                                <>
                                    <div className='div-description'>
                                        <i style={{color: 'green'}} className="material-symbols-outlined">expand_circle_up</i>
                                    </div>
                                    <span style={{color: 'green'}}>{money(payments.payment_value)}</span>
                                </>
                                :
                                <>
                                    <div className='div-description'>
                                        <i className="material-symbols-outlined">expand_circle_down</i>
                                    </div>
                                    <span>{money(payments.payment_value)}</span>
                                </>
                            }
                            <small>{dates.dates(payments.created_at)}</small>
                        </article>
                    ))
                }
            </section>
            <Pagination
                paginationBack={paginationBack}
                paginationNext={paginationNext}
                count={count}
                countrecords={countrecords}
                take={take}
                data={data.length}
            />
        </ContainerPayments>
        </>
    )
}

export default Payments