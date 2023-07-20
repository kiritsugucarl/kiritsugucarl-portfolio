import aboutImg from '/dp.png'
import './About.css'

const About = () =>{
    return(
        <section className="about container section">
            <div className='about__content'>
                <h2 className='about__title'>ABOUT</h2>
                <p className='about__description'>
                    Hi! I’m Carl Dennis Pineda, an aspiring <strong>Front-end / Fullstack </strong> web developer, based in Pasig City. Everyday, I find some problems or things that I want to figure out and ends the day by figuring them out especially in tech.
                </p>
                <p className='about__description'>
                    I feel like I’m a scientist, but more of a computer one. I love to do studying and finding out new features and even languages.
                </p>
                <p className='about__description'>
                    I started as an hobbyist, but as time passes by, I realized why I love coding and programming in general.
                </p>
                <p className='about__description'>
                    Currently enrolled in Rizal Technological University - Boni Campus, 4th year and is expected to graduate at 2024.
                </p>
                <hr className='about__hr'/>
                <h3 className='about__subtitle'>Technologies:</h3>
                <div className="about__ul-container">
                    <ul className='about__ul'>
                        <li className='about__list'>HTML</li>
                        <li className='about__list'>CSS</li>
                        <li className='about__list'>JavaScript (ES6+)</li>
                        <li className='about__list'>ReactJs</li>
                        <li className='about__list'>PHP</li>
                        <li className='about__list'>MySQL</li>
                    </ul>
                    <ul className='about__ul'>
                        <li className='about__list'>Java</li>
                        <li className='about__list'>Python</li>
                        <li className='about__list'>C#</li>
                        <li className='about__list'>Bootstrap</li>
                        <li className='about__list'>Firebase</li>
                        <li className='about__list'>Git</li>
                    </ul>
                </div>
            </div>
            <div className='about__img-wrapper'>
                <img className='about__img' src={aboutImg}/>
            </div>
        </section>
    )
}

export default About