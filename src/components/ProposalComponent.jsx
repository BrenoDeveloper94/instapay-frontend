import { NavLink } from "react-router-dom"
import BoxProposal from "../styles/BoxProposal"
import dates from '../utils/dates'
import money from '../utils/money'


const ProposalComponent = ({identifier, src_profile, title, created_at, description, src_proposal, value_proposal, categories, id}) => {
    return(
        <>
        <BoxProposal key={identifier}>
            <div className='header-proposal'>
                <section>
                    <img className='profileImg' src={src_profile} alt="" />
                    <div>
                        <span>{title}</span>
                        <small>{dates.dateCompare(created_at)}</small>
                    </div>
                </section>
                <i className="material-symbols-outlined">more_horiz</i>
            </div>
            <p>{description}</p>
            <img className='proposal-photo' src={src_proposal} alt="" />
            <div className='footer-proposal'>
                <div>
                    <small>Oferta:</small>
                    <span>{money(value_proposal)}</span>
                </div>
                <div>
                    <small>Catigoria:</small>
                    <span>{categories}</span>
                </div>
                <NavLink to={`/proposal/${id}`} className='btn-viewmore'>Ver mais</NavLink>
            </div>
        </BoxProposal>
        </>
    )
}


export default ProposalComponent