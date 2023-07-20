import projectImg0 from '../../assets/projects/kaimono.png'
import projectImg1 from '../../assets/projects/ouran_academy.png'
import projectImg2 from '../../assets/projects/folder_calculator.png'
import projectImg3 from '../../assets/projects/gohan.png'
import projectImg4 from '../../assets/projects/gravity_run.jpg'
import gitIcon from '/icon_git.png'
import linkIcon from '/icon_link.png'
import './Projects.css'

const Projects = () =>{
    return(
        <section className='projects container section'>
            <h2 className='projects__title'>Projects</h2>
            <p className='projects__description'>
            Here are the notable Projects I have made or taken part of for my journey in the field:
            </p>
            {/* Project 1 */}
            <h3 className='projects__project-title'>Kaimono Shop</h3>
            <div className="projects__project-img-wrapper">
                <img className='projects__project-img' src={projectImg0} alt=''/>
            </div>
            <div className="projects__project">
                <p className='projects__project-description1'>An e-commerce website that was made for completion for my Second Year College. The website used PHP, CSS, MYSql and I used prepared statements of PHP here.</p>
                <p className='projects__project-description2'>I was mainly in charge with the backend, the database, and some problems that occur within the UI itself.</p>
                <div className="projects__project-button-wrapper">
                    <a href='' className='projects__project-btn btn red-btn'>Github</a>
                    <a href='' className='projects__project-btn btn red-btn'>Website</a>
                </div>
            </div>

            {/* Project 2 */}
            <h3 className='projects__project-title'>Ouran Academy</h3>
            <div className="projects__project-img-wrapper">
                <img className='projects__project-img' src={projectImg1} alt=''/>
            </div>
            <div className="projects__project">
                <p className='projects__project-description1'>A school database system where the admin could enroll a student. Made with PHP, CSS, and MySQL.</p>
                <p className='projects__project-description2'>I was mainly in charge with the backend, the database, and again, problems that occur within the UI.</p>
                <div className="projects__project-button-wrapper">
                    <a href='' className='projects__project-btn btn red-btn'>Github</a>
                    <a href='' className='projects__project-btn btn red-btn'>Website</a>
                </div>
            </div>

            {/* Project 3 */}
            <h3 className='projects__project-title'>Folder Calculator</h3>
            <div className="projects__project-img-wrapper">
                <img className='projects__project-img' src={projectImg2} alt=''/>
            </div>
            <div className="projects__project">
                <p className='projects__project-description1'>A calculator with a lot of special effects. Made with PHP and CSS.</p>
                <p className='projects__project-description2'>I contributed upon the design ideas, and created the PHP codes, and helped with the effects the site has.</p>
                <div className="projects__project-button-wrapper">
                    <a href='' className='projects__project-btn btn red-btn'>Github</a>
                    <a href='' className='projects__project-btn btn red-btn'>Website</a>
                </div>
            </div>

            {/* Project 4 */}
            <h3 className='projects__project-title'>Folder Calculator</h3>
            <div className="projects__project-img-wrapper">
                <img className='projects__project-img' src={projectImg2} alt=''/>
            </div>
            <div className="projects__project">
                <p className='projects__project-description1'>A calculator with a lot of special effects. Made with PHP and CSS.</p>
                <p className='projects__project-description2'>I contributed upon the design ideas, and created the PHP codes, and helped with the effects the site has.</p>
                <div className="projects__project-button-wrapper">
                    <a href='' className='projects__project-btn btn red-btn'>Github</a>
                    <a href='' className='projects__project-btn btn red-btn'>Website</a>
                </div>
            </div>

            {/* Project 5 */}
            <h3 className='projects__project-title'>Folder Calculator</h3>
            <div className="projects__project-img-wrapper">
                <img className='projects__project-img' src={projectImg2} alt=''/>
            </div>
            <div className="projects__project">
                <p className='projects__project-description1'>A calculator with a lot of special effects. Made with PHP and CSS.</p>
                <p className='projects__project-description2'>I contributed upon the design ideas, and created the PHP codes, and helped with the effects the site has.</p>
                <div className="projects__project-button-wrapper">
                    <a href='' className='projects__project-btn btn red-btn'>Github</a>
                    <a href='' className='projects__project-btn btn red-btn'>Website</a>
                </div>
            </div>
        </section>
    )
}

export default Projects