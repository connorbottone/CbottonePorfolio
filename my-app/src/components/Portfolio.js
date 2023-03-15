import {projects} from '../projects.js';
import "../styles/portfolio.css"
import img from "../images/portImg.jpg"
import {useState} from 'react'
const Portfolio = () => {
    const [project,setProject] = useState(0);
    const firstProject = [projects[project]];
    const Next = () => {
        if(project === 6){
            setProject(0);
        }
        else
      setProject(project + 1);
    };  
    const Prev = () => {
        if(project === 0){  
            setProject(0);
        }
        else
        setProject(project - 1);
    };
    
  
    return (
      <div className="portfolio">
        <img id="bkG" src={img} alt="background"></img>
        <div className="project-list">
          {firstProject.map((project) => (
            <div className="project-card">
              <h2 className='title'>{project.title}</h2>
              <div className="project-container">
              <div className="project-image-container">
                <video controls autoplay id="img" src={project.video}></video>
              </div>
              <div className="project-description">
                <h3>{project.descripton}</h3>
                <a href={project.webpagelink}>Webpage link</a>
                <a href={project.githublink}>Repo link</a>
              </div>
            </div>
            </div>
          ))}
          <button className="next-Btn" onClick={Next}>NEXT</button>
          <button className="prev-Btn" onClick={Prev}>PREV</button>
        </div>
      </div>
    );
  };
export default Portfolio;
