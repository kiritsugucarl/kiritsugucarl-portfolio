import aboutImg from "/dp.jpg";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about container section">
            <div className="about__content">
                <h2 className="about__title">ABOUT</h2>
                <p className="about__description">
                    Hi! I’m Carl Dennis Pineda, a{" "}
                    <strong>Software Engineer</strong> that is currently looking
                    for more opportunities to further oneself in the tech
                    industry
                </p>
                <p className="about__description">
                    For my past experience, I have specialized in creating
                    scripts in <strong>bash</strong> and automating/creating{" "}
                    <strong>macros</strong> for less manual workload in the
                    project I was deployed on.
                </p>
                <p className="about__description">
                    Hobbyist during studying days, realized that solving
                    problems and integrating different things together is fun in
                    work.
                </p>
                <p className="about__description">
                    Currently employed as a Software Engineer in{" "}
                    <strong>Ascendion Philippines</strong> where I show the
                    skills I have nurtured over the years of studying and a
                    year-worth experience in the professional corporate setting.
                </p>
                <hr className="about__hr" />
                <h3 className="about__subtitle">Technologies:</h3>
                <div className="about__ul-container">
                    <ul className="about__ul">
                        <li className="about__list">HTML</li>
                        <li className="about__list">CSS</li>
                        <li className="about__list">JavaScript (ES6+)</li>
                        <li className="about__list">React Framework</li>
                        <li className="about__list">Shell Scripting</li>
                        <li className="about__list">VB Scripting</li>
                        <li className="about__list">Perl</li>
                        <li className="about__list">PHP</li>
                        <li className="about__list">Node.js</li>
                        <li className="about__list">Express.js</li>
                    </ul>
                    <ul className="about__ul">
                        <li className="about__list">Java</li>
                        <li className="about__list">Python</li>
                        <li className="about__list">Power Automate</li>
                        <li className="about__list">C#</li>
                        <li className="about__list">Linux/UNIX</li>
                        <li className="about__list">MySQL</li>
                        <li className="about__list">PostgreSQL</li>
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
