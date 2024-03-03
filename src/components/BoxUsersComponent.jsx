import ProfilePhoto from '../../public/profileNot.png'
import { NavLink } from 'react-router-dom'
import dates from '../utils/dates'


const BoxUsersComponent = ({name, email, button, text_button, path, logged, last_acess, image_profile}) => {
    return(
        <>
            <section style={{marginBottom: button == 'none' && '30px'}}>
                {
                    image_profile
                    ?
                    <img className='profileImg' src={`https://drive.google.com/uc?export=view&id=${image_profile}`} alt="" />
                    :
                    <img className='profileImg' src={ProfilePhoto} alt="" />
                }
                <div>
                    <span>{name} / 
                    {
                        logged == 1
                        ?
                        <small style={{color: '#07f107'}}> Online</small>
                        :
                        <small> Offline {dates.dateCompare(last_acess)}</small>
                    }
                    </span>
                    <small>{email}</small>
                </div>
            </section>
            <NavLink to={`${path}`} style={{display: `${button}`}} className='btn-visit'>{text_button}</NavLink>
        </>
    )
}

export default BoxUsersComponent