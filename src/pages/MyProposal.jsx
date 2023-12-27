import { NavLink } from 'react-router-dom'
import useRequestGet from '../hooks/useRequestGet'
import { useContext } from 'react'
import { LoginContext } from '../contexts/loginContext'
import Article from '../styles/Article'
import ProposalComponent from '../components/ProposalComponent'
import Aside from '../styles/Aside'
import BoxUsers from '../styles/BoxUsers'
import BoxProposal from '../styles/BoxProposal'
import Spinner from '../styles/Spinner'
import Pagination from '../components/Pagination'


const MyProposal = () => {

    document.title = 'Instapay / Minhas propostas'

    const {logged: idLogged} = useContext(LoginContext)

    const pathGet = 'proposal'
    const key = idLogged
    const {paginationNext, paginationBack, count, countrecords, take, data, loading} = useRequestGet(pathGet, key)


    return(
        <>
        <Article>
            {loading == true &&
                <BoxProposal style={{alignItems: 'center'}}>
                    <Spinner />
                </BoxProposal>
            }
            {data.length == 0 &&
                <BoxProposal style={{alignItems: 'center'}}>
                    <p className='text-no-proposal'>Crie sua primeira proposta</p>
                    <NavLink className='btn-create-proposal' to={'/create/proposal'}>Criar proposta</NavLink>
                </BoxProposal>
            }
            {
                data.map(proposals =>(
                    <ProposalComponent key={proposals.id} 
                        identifier={proposals.id}
                        image_profile={proposals.user.profile_image}
                        title={proposals.title_proposal}
                        created_at={proposals.created_at}
                        description={proposals.description}
                        value_proposal={proposals.proposal_value}
                        categories={proposals.categories.text_categories}
                        id={proposals.id}
                    />
                ))
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
                    <h3>Essas são propostas criadas por você</h3>
                </header>
            </BoxUsers>
        </Aside>
        </>
    )
}

export default MyProposal