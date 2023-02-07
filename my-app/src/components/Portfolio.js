import {projects} from '../projects.js';
const Portfolio = () => {
    return (
        <div className="portfolio"> 
            <h1>Portfolio</h1>  
            <div>
                {projects.map((project) => (
                    <div>
                        <h2>{project.title}</h2>
                        <h3>{project.descripton}</h3>
                        <a href={project.webpagelink}>link</a>
                    </div>
                ))}
            </div>
        </div>
    )}
export default Portfolio;
