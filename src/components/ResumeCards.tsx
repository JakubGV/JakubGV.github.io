import { FunctionComponent } from 'react';
import './ResumeCards.css';

type ListGeneratorProps = {
  bullets: string[]
}

const ListGenerator: FunctionComponent <ListGeneratorProps> = (props) => {
  return (
    <>
      <ul>
        {
          props.bullets.map( (bullet: string, index: number) => {
            return <li key={index.toString()}>{bullet}</li>
          })
        }
      </ul>
    </>
  )
}

type Highlight = {
  company: string,
  jobTitle: string,
  bullets: string[]
}

type ResumeProps = {
  highlights: Highlight[]
}

/**
 * Renders a series of resume cards based on the given highlights 
 * @param props 
 * @param props.highlights The resume highlights consisting of a company name, job title, and bullets
 * @returns Several resume cards in a flex container
 */
export const ResumeCards: FunctionComponent <ResumeProps> = (props) => {
  return (
    <div className="highlights-container">
    {
      props.highlights.map( (highlight: Highlight) => {
        return (
          <div className="highlight-card" key={highlight.company}>
            <h2 className="subheader">{highlight.company}</h2>
            <h3>{highlight.jobTitle}</h3>
            <ListGenerator bullets={highlight.bullets}/>
          </div>
        )
      })
    }
    </div>
  )
}