/* eslint-disable react/no-unknown-property */
import './FeaturedProjects.css'
import featured0 from '../../assets/featured-project/featured__home.png'
import featured1 from '../../assets/featured-project/featured__01.png'
import featured2 from '../../assets/featured-project/featured__02.png'
import featured3 from'../../assets/featured-project/featured__03.png'
import featured4 from '../../assets/featured-project/featured__04.png'
import featured5 from '../../assets/featured-project/featured__05.png'
import featured6 from '../../assets/featured-project/featured__06.png'

const FeaturedProjects = () =>{
    return(
        <section id='featured' className='featured container section'>
            <h3 className='featured__subtitle'>Featured Project</h3>
            <div className="featured__title-wrapper">
                <h2 className='featured__title'>Social Welfare System</h2>
                <a className='featured__link' href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
            <p className='featured__description'>
                This project is made by Rizal Technological University team where I am the leader of the project and was mainly in-charge for the development of the User Interface. The website is still ongoing and is to be published once done.
            </p>
            <p className='featured__description'>
                The project was commissioned by the Office of the Congressman Hon. Neptali Gonzales from Mandaluyong to our school for their Social Welfare to be digitalized and have faster transactions for their assistance program.
            </p>

            <div className="featured__info-wrapper">
                <div>
                    <h3 className='featured__label'>Tech stack</h3>
                    <ul className='featured__tech-stack'>
                        <li className='featured__info'>ReactJS</li>
                        <li className='featured__info'>CSS</li>
                        <li className='featured__info'>React-Hook-Form</li>
                    </ul>
                </div>
                <div>
                    <h3 className='featured__label'>Project type</h3>
                    <p className='featured__info'>Government</p>
                </div>
                <div>
                    <h3 className='featured__label'>Timeline</h3>
                    <p className='featured__info'>December 2022-Present</p>
                </div>
            </div>
            <div className="featured__img-container">
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured0} alt='' loading="lazy"/>
                </div>
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured1} alt='' loading="lazy"/>
                </div>
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured2} alt='' loading="lazy"/>
                </div>
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured3} alt='' loading="lazy"/>
                </div>
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured4} alt='' loading="lazy"/>
                </div>
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured5} alt='' loading="lazy"/>
                </div>
                <div className='featured__img-wrapper'>
                    <img className='featured__img' src={featured6} alt='' loading="lazy"/>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects