import { NavLink } from "react-router-dom"
import BoxProposal from "../styles/BoxProposal"
import ProfilePhoto from '../../public/profileNot.png'
import dates from '../utils/dates'
import money from '../utils/money'


const ProposalComponent = ({identifier, image_profile, title, created_at, description, value_proposal, categories, id, interested}) => {
    return(
        <>
        <BoxProposal key={identifier} style={{border: interested == 1 && 'solid 3px blue'}}>
            {
                interested == 1 &&
                <div className='notification-interested'>
                    <span>Interessados</span>
                </div>
            }
            <div className='header-proposal'>
                <section>
                    {
                        image_profile
                        ?
                        <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${image_profile}`} alt="" />
                        :
                        <img className='profileImg' src={ProfilePhoto} alt="" />
                    }
                    <div>
                        <span>{title}</span>
                        <small>{dates.dateCompare(created_at)}</small>
                    </div>
                </section>
                <i className="material-symbols-outlined">more_horiz</i>
            </div>
            <p>{description}</p>
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