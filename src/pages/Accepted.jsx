import { useContext } from 'react'
import useRequestGet from '../hooks/useRequestGet'
import { LoginContext } from '../contexts/loginContext'


const Accepted = () => {

    const {logged: idLogged} = useContext(LoginContext)

    const pathGet = 'proposal/accepted'
    const key = idLogged

    const {data, loading} = useRequestGet(pathGet, key)
   
    return(
        <>
        <h1>Accepted</h1>
        {loading == true ? <p>loading...</p> : <p></p>}
        <ul>
        {
            data.map(accepted =>(
                <div key={accepted.id}>
                    <li>
                        <p>id do criador da proposta: {accepted.proposal.user.first_name}</p>
                        <p>id da aceitacao: {accepted.id}</p>
                        <p>id de quem aceitou a proposta: {accepted.id_influenser}</p>
                    </li>
                    
                </div>
            ))
        }
        </ul>
        </>
    )
}

export default Accepted