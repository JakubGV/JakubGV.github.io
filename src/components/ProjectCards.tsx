import { FunctionComponent } from 'react';
import './ProjectCards.css';

type Project = {
  icon: any,
  name: string,
  link: string,
  description: string,
}

type ProjectsProps = {
  projects: Project[]
}

/**
 * Renders a series of project cards given an array of projects 
 * @param props 
 * @param props.projects The projects consisting of an icon, name, link, and description
 * @returns Several project cards in a flex container
 */
export const ProjectCards: FunctionComponent <ProjectsProps> = (props) => {
  return (
    <div className="project-container">
    {
      props.projects.map( (project: Project) => {
        return (
          <div className="project-card" key={project.name}>
            <img className="icon" src={project.icon} width="100" height="100" alt={project.name+' icon'} />
            <h2 className="subheader">{project.name}</h2>
            <p className="card-p">{project.description}</p>
            <button className="card-button"><a href={project.link} target="_blank" rel="noreferrer"><h2 className="subheader">Explore</h2></a></button>
          </div>
        )
      })
    }
    </div>
  )
}