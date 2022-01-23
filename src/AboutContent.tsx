import { FunctionComponent } from 'react';
import './AboutContent.css';

type AboutContentProps = {
  paragraphs: string[]
}

/**
 * Renders `props.paragraphs` styled for desktop and mobile screens 
 * @param props 
 * @param props.paragraphs The text to place in separate paragraphs
 * @returns `<div>` container element with `<p>` tags
 */
export const AboutContent: FunctionComponent <AboutContentProps> = (props) => {
  return (
    <div className="text-container">
    {
      props.paragraphs.map( (paragraph: string, index: number) => {
        return <p key={index}>{paragraph}</p>;
      })
    }
    </div>
  )
}