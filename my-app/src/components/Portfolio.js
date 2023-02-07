import {projects} from '../projects.js';
import "../styles/portfolio.css"
const Portfolio = () => {
    return (
        <div className="portfolio"> 
            
            <div className="project-list">
                {projects.map((project) => (
                    <div className="project-card">
                        <h2>{project.title}</h2> 
                        <div className="project-image-container">
                            <img id="img" src={project.image}></img>
                        </div>
                        <div className="project-description">
                            <h3>{project.descripton}</h3>
                            <a href={project.webpagelink}>Webpage link</a>
                            <a href={project.githublink}>Repo link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )}

export default Portfolio;
