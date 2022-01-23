import { FunctionComponent } from 'react';
import './AboutContent.css';

type AboutContentProps = {
  paragraphs: string[]
}

export const AboutContent: FunctionComponent <AboutContentProps> = (props) => {
  return (
    <div className="text-container">
    {
      props.paragraphs.map( (paragraph: string) => {
        return <p>{paragraph}</p>;
      })
    }
    </div>
  )
}