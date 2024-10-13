import heroImg from "/circle-dp.png";
import "./Hero.css";
const Hero = () => {
    return (
        <section className="hero container">
            <img className="hero__img" src={heroImg} loading="lazy" />
            <h2 className="hero__subtitle">Hi! Its me Carl</h2>
            <h1 className="hero__title">
                SOFTWARE <br />
                ENGINEER
            </h1>
            <p className="hero__description">
                {/* A diligent <strong>Front-end / Fullstack </strong> web developer
                that loves to learn things and find out how they work.
                Specializing in{" "}
                <strong>solving problems and creating innovative ideas</strong>{" "}
                when developing features. */}
                A passionate <strong>software engineer</strong> currently
                working at <strong>Collabera Digital</strong> showing{" "}
                <strong>efficiency and dedication</strong> to fix issues, apply
                changes, that will further <strong> benefit businesses</strong>
            </p>
            <a
                className="hero__button btn red-btn"
                href="mailto:cdbpineda02@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Reach Out
            </a>
        </section>
    );
};

export default Hero;
