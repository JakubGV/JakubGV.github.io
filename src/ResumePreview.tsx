import { Component, FunctionComponent } from 'react';
import './ResumePreview.css';

type ResumePreviewProps = {
  resumeLink: string
  preview: sectionToPreview[]
}

type ResumePreviewState = {

}

type sectionToPreview = {
  company: string,
  jobTitle: string,
  bullets: string[]
}

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

export class ResumePreview extends Component <ResumePreviewProps, ResumePreviewState> {
  render() {
    return (
      <div className="main-container">
        <div className="container">
        {
          this.props.preview.map( (section: sectionToPreview, index: number) => {
            return (
              <div className="section" key={index.toString()}>
                <div className="header">
                  <h3>{section.company}</h3>
                  <h4>{section.jobTitle}</h4>
                </div>
                <div className="content">
                  <ListGenerator bullets={section.bullets} />
                </div>
              </div>
            )
          })
        }
        </div>
        
        <div className="link">
          <a href={this.props.resumeLink} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="File Download"><path d="M42 52h-5V37a1 1 0 0 0-2 0v16a1 1 0 0 0 1 1h3.586L32 61.586 24.414 54H28a1 1 0 0 0 1-1V37a1 1 0 0 0-2 0v15h-5a1 1 0 0 0-.707 1.707l10 10a1 1 0 0 0 1.414 0l10-10A1 1 0 0 0 42 52zM36 34a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1zM33 33v-9a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0zM28 34a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1z" fill="#28282b"/><path d="m50.707 9.293-9-9A1.091 1.091 0 0 0 41 0H14a1 1 0 0 0-1 1v46a1 1 0 0 0 1 1h10a1 1 0 0 0 0-2h-9V2h25v8a1 1 0 0 0 1 1h8v35h-9a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1V10a1.092 1.092 0 0 0-.293-.707zM42 9V3.414L47.586 9z" fill="#28282b"/></g></svg>
          </a>
        </div>
      </div>
    )
  }
}