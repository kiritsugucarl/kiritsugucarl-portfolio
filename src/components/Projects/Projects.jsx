import projectImg0 from "../../assets/projects/kaimono.png";
import projectImg1 from "../../assets/projects/ouran_academy.png";
import projectImg2 from "../../assets/projects/folder_calculator.png";
import projectImg3 from "../../assets/projects/gohan.png";
import projectImg4 from "../../assets/projects/gravity_run.jpg";
import projectImg5 from "../../assets/projects/momz_buffet.png";
import projectImg6 from "../../assets/projects/bird_in_space.png";
import projectImg7 from "../../assets/projects/dm_portfolio.png";
import projectImg8 from "../../assets/projects/system_welfare.png";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects container section">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__description">
                Here are the notable Projects I have made or taken part of for
                my journey in the field:
            </p>
            <div className="projects__container">
                {/* Project 0 */}
                <h3 className="projects__project-title">
                    Social Welfare System
                </h3>
                <div className="projects__project-img-wrapper projects__image1">
                    <img
                        className="projects__project-img"
                        src={projectImg8}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content1">
                    <h3 className="projects__project-subtitle">
                        Social Welfare System
                    </h3>
                    <p className="projects__project-description1">
                        A system that was commissioned by Congressman Neptali
                        Gonzales to Rizal Technological University and was my
                        OJT from December 2022 - January 2024.
                    </p>
                    <p className="projects__project-description2">
                        I was the team leader and was in charge for the user
                        side who created the UI and applied various steps to
                        increase the security of handling the forms as it was
                        one of the most used component of the application.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/8inx/swmanda-admin"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Frontend Github
                        </a>
                        {/* <a href='' className='projects__project-btn btn red-btn'>Website</a> */}
                    </div>
                </div>
                {/* Project 1 */}
                <h3 className="projects__project-title">Kaimono Shop</h3>
                <div className="projects__project-img-wrapper projects__image2">
                    <img
                        className="projects__project-img"
                        src={projectImg0}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content2">
                    <h3 className="projects__project-subtitle">Kaimono Shop</h3>
                    <p className="projects__project-description1">
                        An e-commerce website that was made for completion for
                        my Second Year College. The website used PHP, CSS, MYSql
                        and I used prepared statements of PHP here.
                    </p>
                    <p className="projects__project-description2">
                        I was mainly in charge with the backend, the database,
                        and some problems that occur within the UI itself.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/Kaimono"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        {/* <a href='' className='projects__project-btn btn red-btn'>Website</a> */}
                    </div>
                </div>

                {/* Project 2 */}
                <h3 className="projects__project-title">Ouran Academy</h3>
                <div className="projects__project-img-wrapper projects__image3">
                    <img
                        className="projects__project-img"
                        src={projectImg1}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content3">
                    <h3 className="projects__project-subtitle">
                        Ouran Academy
                    </h3>
                    <p className="projects__project-description1">
                        A school database system where the admin could enroll a
                        student. Made with PHP, CSS, and MySQL.
                    </p>
                    <p className="projects__project-description2">
                        I was mainly in charge with the backend, the database,
                        and again, problems that occur within the UI.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/Ouran-Academy"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        {/* <a href='' className='projects__project-btn btn red-btn'>Website</a> */}
                    </div>
                </div>

                {/* Project 3 */}
                <h3 className="projects__project-title">Folder Calculator</h3>
                <div className="projects__project-img-wrapper projects__image4">
                    <img
                        className="projects__project-img"
                        src={projectImg2}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content4">
                    <h3 className="projects__project-subtitle">
                        Folder Calculator
                    </h3>
                    <p className="projects__project-description1">
                        A calculator with a lot of special effects. Made with
                        PHP and CSS.
                    </p>
                    <p className="projects__project-description2">
                        I contributed upon the design ideas, and created the PHP
                        codes, and helped with the effects the site has.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/folder-calculator"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="http://kiritusugucarl-foldercalculator.free.nf/?i=1"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Website
                        </a>
                    </div>
                </div>

                {/* Project 4 */}
                <h3 className="projects__project-title">Gohan POS</h3>
                <div className="projects__project-img-wrapper projects__image5">
                    <img
                        className="projects__project-img"
                        src={projectImg3}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content5">
                    <h3 className="projects__project-subtitle">Gohan POS</h3>
                    <p className="projects__project-description1">
                        An e-commerce mobile application made with Java, XML,
                        and Firebase for completion during my Third Year
                        College.
                    </p>
                    <p className="projects__project-description2">
                        I was the one who created all the functions in the app.
                        It has Login, Register, and a database connected to the
                        activities within the app.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/GohanPOS"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href=""
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Drive
                        </a>
                    </div>
                </div>

                {/* Project 5 */}
                <h3 className="projects__project-title">Gravity Run</h3>
                <div className="projects__project-img-wrapper projects__image6">
                    <img
                        className="projects__project-img"
                        src={projectImg4}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content6">
                    <h3 className="projects__project-subtitle">Gravity Run</h3>
                    <p className="projects__project-description1">
                        A game that was made using Unity C#. Part of me being an
                        hobbyist.
                    </p>
                    <p className="projects__project-description2">
                        It involved various amounts of scripting, level design,
                        and of course music and the UI designing
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://drive.google.com/file/d/1gMt5lALRAUnbYzpXG0ayHd2gQ8BbaDUH/view?usp=sharing"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Drive
                        </a>
                    </div>
                </div>

                {/* Project 6 */}
                <h3 className="projects__project-title">Momz Buffet</h3>
                <div className="projects__project-img-wrapper projects__image7">
                    <img
                        className="projects__project-img"
                        src={projectImg5}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content7">
                    <h3 className="projects__project-subtitle">Momz Buffet</h3>
                    <p className="projects__project-description1">
                        A mock-up commerce website for buffet restaurant made
                        with ReactJs and CSS
                    </p>
                    <p className="projects__project-description2">
                        It involved various UI/UX desiging and a step further in
                        making websites for businesses.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/momz-buffet"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://momz-buffet.vercel.app/"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Website
                        </a>
                    </div>
                </div>

                {/* Project 7 */}
                <h3 className="projects__project-title">Bird in the Space</h3>
                <div className="projects__project-img-wrapper projects__image8">
                    <img
                        className="projects__project-img"
                        src={projectImg6}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content8">
                    <h3 className="projects__project-subtitle">
                        Bird in the Space
                    </h3>
                    <p className="projects__project-description1">
                        A game that was made using Pygame, a final requirement
                        for our Game Analysis during my Third Year of College.
                    </p>
                    <p className="projects__project-description2">
                        I was the one who was assigned to make the game, and
                        there was actually two, but decided to only display this
                        one. It involved hard-coded animations that I felt was
                        so innovative for design especially for my first game in
                        Python.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/Game-Analysis-Finals/tree/master/bird_in_the_space_game"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>

                {/* Project 8 */}
                <h3 className="projects__project-title">
                    Discrete Math Portfolio
                </h3>
                <div className="projects__project-img-wrapper projects__image9">
                    <img
                        className="projects__project-img"
                        src={projectImg7}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="projects__project projects__content9">
                    <h3 className="projects__project-subtitle">
                        Discrete Math Portfolio
                    </h3>
                    <p className="projects__project-description1">
                        A personal portfolio that was made for a Final
                        Requireent during my Second Year in College. Made with
                        HTML CSS Bootstrap
                    </p>
                    <p className="projects__project-description2">
                        This isn&apos;t the first time that I used Bootstrap. I
                        actually used them a lot before, but this project was by
                        far the one I want to display since I also incorporated
                        own designing in this website.
                    </p>
                    <div className="projects__project-button-wrapper">
                        <a
                            href="https://github.com/kiritsugucarl/dm-portfolio"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://kiritsugucarl.github.io/dm-portfolio/"
                            className="projects__project-btn btn red-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Website
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
