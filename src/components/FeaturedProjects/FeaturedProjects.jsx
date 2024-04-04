/* eslint-disable react/no-unknown-property */
import "./FeaturedProjects.css";
import featured1 from "../../assets/featured-project/featured__01.png";
import featured2 from "../../assets/featured-project/featured__02.png";
import featured3 from "../../assets/featured-project/featured__03.png";
import featured4 from "../../assets/featured-project/featured__04.png";

const FeaturedProjects = () => {
    return (
        <section id="featured" className="featured container section">
            <h3 className="featured__subtitle">Featured Project</h3>
            <div className="featured__title-wrapper">
                <h2 className="featured__title">musictaste.me</h2>
                <a
                    className="featured__link"
                    href="https://musictaste.me"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
            <p className="featured__description">
                This is my most recent project and is used for our capstone
                completion in Rizal Technological University. I am the leader of
                the capstone team and it features a web application that can be
                used to identify a music taste of a person based on their input,
                as well as their music personality.
            </p>
            <p className="featured__description">
                The project uses different microservices thus allowing me which
                is the lead developer for this project to master the various
                advantages of ReactJs, utilization of API usages, as well as
                creating algorithms to get desired results.
            </p>

            <div className="featured__info-wrapper">
                <div>
                    <h3 className="featured__label">Tech stack</h3>
                    <ul className="featured__tech-stack">
                        <li className="featured__info">ReactJS</li>
                        <li className="featured__info">CSS</li>
                        <li className="featured__info">Ionic Capacitor</li>
                        <li className="featured__info">Axios</li>
                        <li className="featured__info">SpotifyAPI</li>
                        <li className="featured__info">Firebase</li>
                    </ul>
                </div>
                <div>
                    <h3 className="featured__label">Project type</h3>
                    <p className="featured__info">Capstone Project</p>
                </div>
                <div>
                    <h3 className="featured__label">Timeline</h3>
                    <p className="featured__info">August 2023-April 2024</p>
                </div>
            </div>
            <div className="featured__img-container">
                <div className="featured__img-wrapper">
                    <img
                        className="featured__img"
                        src={featured1}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="featured__img-wrapper">
                    <img
                        className="featured__img"
                        src={featured2}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="featured__img-wrapper">
                    <img
                        className="featured__img"
                        src={featured3}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="featured__img-wrapper">
                    <img
                        className="featured__img"
                        src={featured4}
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
