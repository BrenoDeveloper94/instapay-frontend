import { NavLink } from 'react-router-dom'
import useRequestGet from '../hooks/useRequestGet'
import { LoginContext } from '../contexts/loginContext'
import { useContext } from 'react'
import Article from '../styles/Article'
import Aside from '../styles/Aside'
import BoxProposal from '../styles/BoxProposal'
import ProfilePhoto from '../../public/userprofile.jpg'
import ProposalPhoto from '../../public/img-proposal.jpg'
import BoxUsers from '../styles/BoxUsers'
import Spinner from '../styles/Spinner'
import ProposalComponent from '../components/ProposalComponent'
import BoxUsersComponent from '../components/BoxUsersComponent'
import Pagination from '../components/Pagination'


const Home = () => {

    const {logged: idLogged} = useContext(LoginContext)

    const pathGet = 'proposal'
    const key = idLogged
    const {paginationNext, paginationBack, count, countrecords, take, data, loading} = useRequestGet(pathGet, key)


    const pathGetUser = 'user'
    const keyUser = ''
    const {data: dataUser, loading: loadingUser} = useRequestGet(pathGetUser, keyUser)

    const foundUsers = dataUser.filter(users =>{
        return users.id != idLogged
    })
   
    return(
        <>
        <Article>
            {loading == true &&
                <BoxProposal style={{alignItems: 'center'}}>
                    <Spinner />
                </BoxProposal>
            }
            {
                data.length == 0 &&
                <BoxProposal style={{alignItems: 'center'}}>
                    <p className='text-no-proposal'>Crie sua primeira proposta</p>
                    <NavLink className='btn-create-proposal' to={'/create/proposal'}>Criar proposta</NavLink>
                </BoxProposal>
            }
            {
                data.length != 0 ?
                data.map(proposals =>(
                    <ProposalComponent key={proposals.id}
                        identifier={proposals.id}
                        src_profile={ProfilePhoto}
                        title={proposals.title_proposal}
                        created_at={proposals.created_at}
                        description={proposals.description}
                        src_proposal={ProposalPhoto}
                        value_proposal={proposals.proposal_value}
                        categories={proposals.categories.text_categories}
                        id={proposals.id}
                    />
                ))
                :
                <BoxProposal style={{alignItems: 'center'}}>
                    <p className='text-no-proposal'>Nenhuma proposta esta disponivel ainda</p>
                </BoxProposal>
            }
            <Pagination
                paginationBack={paginationBack}
                paginationNext={paginationNext}
                count={count}
                countrecords={countrecords}
                take={take}
                data={data.length}
            />
        </Article>
        <Aside>
            <BoxUsers>
                <header>
                    <h3>Usuários</h3>
                    <NavLink style={{display: 'flex'}} to={'/user'} className='see-all'>Ver todos</NavLink>
                </header>
                {
                     foundUsers.map(users =>(
                        <BoxUsersComponent key={users.id}
                            button='flex'
                            text_button='Visitar'
                            path={`/user/profile/${users.id}`}
                            name={users.first_name}
                            email={users.email}
                            logged={users.logged}
                            last_acess={users.last_acess}
                        />
                    ))
                }
            </BoxUsers>
        </Aside>
        </>
    )
}

export default Home