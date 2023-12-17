import useRequestGet from "../hooks/useRequestGet"
import {useParams} from 'react-router-dom'
import Aside from "../styles/Aside"
import Article from "../styles/Article"
import BoxProposal from "../styles/BoxProposal"
import BoxAbout from "../styles/BoxAbout"
import ContainerProfile from "../styles/ContainerProfile"
import ProfileBanner from '../../public/banner.png'
import ProfilePhoto from '../../public/userprofile.jpg'
import Spinner from "../styles/Spinner"


const UserProfile = () => {

    const { id } = useParams()

    const pathGet = 'user'
    const key = id

    const {data, loading} = useRequestGet(pathGet, key)

    return(
        <>
        {loading == true ? <ContainerProfile><Spinner /></ContainerProfile> : <p></p>}
        <ContainerProfile>
            <header>
                <div className='box-banner'>
                    <img className='profile-banner' src={ProfileBanner} alt="" />
                </div>
                <section>
                    <div className='box-info'>
                        <img className='profileImg' src={ProfilePhoto} alt="" />
                        <div>
                            <span>{data.first_name} {data.last_name}</span>
                            <small>{data.email}</small>
                        </div>
                    </div>
                    <div className='box-icon'>
                        <i className="material-symbols-outlined">more_horiz</i>
                    </div>
                </section>
                <hr />
            </header>
            <main>
                <Aside>
                    <BoxAbout>
                        <h4>Sobre</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                        <hr />
                        <div className='box-info'>
                            <span className="material-symbols-outlined">nest_heat_link_gen_3</span>
                            <div>
                                <h5>Instagram</h5>
                                <div className='link'>
                                    <a href={`${data.url_profile}`} target='_blank'>Visitar perfil</a>
                                    <i className="material-symbols-outlined">link</i>
                                </div>
                            </div>
                        </div>
                    </BoxAbout>
                </Aside>
                <Article>
                    <BoxProposal></BoxProposal>
                </Article>
            </main>
        </ContainerProfile>
        </>
    )
}

export default UserProfile