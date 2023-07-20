import heroImg from '/circle-dp.png'
import './Hero.css'
const Hero = () =>{
    return(
        <section className="hero container">
            <img className='hero__img' src={heroImg}/>
            <h2 className='hero__subtitle'>Hi! I'm Carl</h2>
            <h1 className='hero__title'>FRONT-END WEB <br/>DEVELOPER</h1>
            <p className='hero__description'>A diligent <strong>Front-end / Fullstack </strong> web developer that loves to learn things and find out how they work. Specializing in <strong>solving problems and creating innovative ideas</strong> when developing features.</p>
            <a className='hero__button btn red-btn' href='#'>Reach out</a>
        </section>
    )
}

export default Hero