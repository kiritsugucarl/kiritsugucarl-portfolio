import aboutImg from "/dp.png";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about container section">
            <div className="about__content">
                <h2 className="about__title">ABOUT</h2>
                <p className="about__description">
                    Hi! I’m Carl Dennis Pineda, a{" "}
                    <strong>Software Engineer</strong> that is striving for more
                    in the tech industry.
                </p>
                <p className="about__description">
                    I specialize on delivering solutions in various problems and
                    challenges in the modern day client requirements.
                    Design-wise or feature-wise, I deliver the requirement with
                    satisfaction to meet the client&apos;s needs
                </p>
                <p className="about__description">
                    I started as an hobbyist, but as time passes by, I realized
                    why I love coding and programming in general.
                </p>
                <p className="about__description">
                    Currently employed as software engineer in{" "}
                    <strong>Collabera Digital</strong> where I show the skills I
                    have nurtured over the years.
                </p>
                <hr className="about__hr" />
                <h3 className="about__subtitle">Technologies:</h3>
                <div className="about__ul-container">
                    <ul className="about__ul">
                        <li className="about__list">HTML</li>
                        <li className="about__list">CSS</li>
                        <li className="about__list">JavaScript (ES6+)</li>
                        <li className="about__list">ReactJs</li>
                        <li className="about__list">React Native</li>
                        <li className="about__list">Ionic Capacitor</li>
                        <li className="about__list">PHP</li>
                        <li className="about__list">Node.js</li>
                        <li className="about__list">Express.js</li>
                    </ul>
                    <ul className="about__ul">
                        <li className="about__list">Java</li>
                        <li className="about__list">Python</li>
                        <li className="about__list">Flask</li>
                        <li className="about__list">C#</li>
                        <li className="about__list">Linux/UNIX</li>
                        <li className="about__list">MySQL</li>
                        <li className="about__list">Firebase</li>
                        <li className="about__list">Bootstrap</li>
                        <li className="about__list">Git</li>
                    </ul>
                </div>
            </div>
            <div className="about__img-wrapper">
                <img className="about__img" src={aboutImg} loading="lazy" />
            </div>
        </section>
    );
};

export default About;
