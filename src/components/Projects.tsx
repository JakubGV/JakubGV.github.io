import { FunctionComponent } from 'react';
import './Projects.css';

type Project = {
  icon: string,
  name: string,
  link: string,
  description: string
}

type ProjectsProps = {
  projects: Project[]
}

/**
 * Renders `props.paragraphs` styled for desktop and mobile screens 
 * @param props 
 * @param props.paragraphs The text to place in separate paragraphs
 * @returns `<div>` container element with `<p>` tags
 */
export const Projects: FunctionComponent <ProjectsProps> = (props) => {
  return (
    <div className="project-container">
    {
      props.projects.map( (project: Project, index: number) => {
        return (
          <div className="project" key={project.name}>
            <img className="icon" src={project.icon} width="50" height="50" alt={project.name + ' icon'} />
            <h3><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></h3>
            <p className="p">{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer"><button className="button">Check it out!</button></a>
          </div>
        )
      })
    }
    </div>
  )
}