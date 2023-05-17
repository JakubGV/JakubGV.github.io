import './PersonalWebsite.css';

import { Navbar } from './components/Navbar';
import { ProjectCards } from './components/ProjectCards';
import { ResumeCards } from './components/ResumeCards';
import { ContactForm } from './components/ContactForm';

import headshot from './media/hard_light_headshot.jpg';
import htmlIcon from './media/HTMLGroup.svg';
import cssIcon from './media/CSSGroup.svg';
import jsIcon from './media/JSGroup.svg';
import reactIcon from './media/ReactGroup.svg';
import pythonIcon from './media/PythonGroup.svg';
import sqlIcon from './media/SQLGroup.svg';

import liIcon from './media/linkedin.png';
import githubIcon from './media/GitHub-32px.png';

import bee from './media/bee.svg';
import squares from './media/squares.svg';

function PersonalWebsite() {
  const sections = ["About", "Projects", "Resume", "Contact"];
  const heroText = "I'm an aspiring software engineer. That means I like technology and writing code. But really, I have the opportunity to build and create solutions that can reach all types of people, all while learning new things every day.";

  
  const about = ["I am a master's electrical and computer engineering student at Rutgers University from the Honors College. I have a minor in business administration and I am interested in better integrating business and engineering principles to lead an engaging, challenging career.",
                 "As for this website, I can proudly say I built it from scratch. There is nothing but handmade HTML, CSS, JavaScript, and a little help from ReactJS. If you have any questions about how I made it or otherwise, don't hesitate to contact me below!",
                ];

  const projects = [{
      icon: bee,
      name: 'NYT Spelling Bee Solver',
      link: 'https://jakubgvogel.com/solve-spelling-bee/',
      description: 'A solver for the NYT spelling bee. I built a React frontend for my existing Python + Flask logic solving backend hosted on Google Cloud Run. Input the letters for the spelling bee and find that missing word!'
    }, {
      icon: squares,
      name: 'Wordle Helper',
      link: 'https://jakubgvogel.com/wordle-helper/',
      description: 'An app that helps you solve the Wordle. I built a React-only web application using the logic from my original wordle solver. Input the words you have guessed to see how many words are left and the best ones to choose!'
    },
  ];
  
  const resumeLink = 'https://drive.google.com/file/d/1SdDAy_aMrn-uYSr-kKWk2YtpEbBrEp8a/view?usp=sharing';
  const resumeHighlights = [{
      company: 'Journal of Young Investigators',
      jobTitle: 'Software Developer',
      bullets: ['Create lightweight and extensible React applications that fetch job posting data from an API and display them for editing to improve upon the existing process for managing job applications at the journal for the executive board.',
                'Work alongside the CTO to develop new features and functionality for the Journal of Young Investigators website']
    }, {
      company: 'General Motors',
      jobTitle: 'Automation Engineer',
      bullets: ['Spearheaded the implementation of a cross-functional, customizable manufacturing execution system (MES) for the General Motors Lockport plant which tracks thousands of components daily across 3 different processes.',
                'Designed and created 3 customizable reports using Microsoft Power BI and SQL Server Reporting Services (SSRS) utilizing the data gathered by the MES system to provide insight into the operational efficiency of various machines for plant managers.',
                'Programmed 3 heat treat furnaces to collect key performance indicators and send them to the plant\'s database to give the Senior Controls Engineer more visibility into the process and allow for proactive maintenance.']
    }
  ];

  const email = "jakub.vogel@rutgers.edu";
  
  return (
    <>
      <div className="grid-container">
        <div className="grid-item-navbar">
          <Navbar header="Jakub Vogel" sections={sections}/>
        </div>

        <div className="hero-text">
          <h1>Jakub Vogel</h1>
          <p>{heroText}</p>
        </div>
        <div className="hero-image">
          <img src={headshot} alt="Head shot of Jakub Vogel"/>
        </div>

        <div className="about-icons">
          <img src={htmlIcon} width="100" alt="HTML icon"/>
          <img src={cssIcon} width="100" alt="CSS icon"/>
          <img src={jsIcon} width="100" alt="JavaScript icon"/>
          <img src={reactIcon} width="100" alt="React icon"/>
          <img src={pythonIcon} width="100" alt="Python icon"/>
          <img src={sqlIcon} width="100" alt="SQL icon"/>
        </div>
        <div className="about-text about">
          <h1>About Me</h1>
          {
            about.map( (paragraph, index) => {
              return <p key={index}>{paragraph}</p>
            })
          }
        </div>

        <section className="projects">
          <h1>Projects</h1>
          <ProjectCards projects={projects}/>
        </section>

        <section className="resume">
          <h1>Resume Highlights</h1>
          <ResumeCards highlights={resumeHighlights}/>
          <div className="link">
            <a href={resumeLink} target="_blank" rel="noreferrer" title="resume link">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64"><g data-name="File Download"><path d="M42 52h-5V37a1 1 0 0 0-2 0v16a1 1 0 0 0 1 1h3.586L32 61.586 24.414 54H28a1 1 0 0 0 1-1V37a1 1 0 0 0-2 0v15h-5a1 1 0 0 0-.707 1.707l10 10a1 1 0 0 0 1.414 0l10-10A1 1 0 0 0 42 52zM36 34a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1zM33 33v-9a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0zM28 34a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1z" fill="#28282b"/><path d="m50.707 9.293-9-9A1.091 1.091 0 0 0 41 0H14a1 1 0 0 0-1 1v46a1 1 0 0 0 1 1h10a1 1 0 0 0 0-2h-9V2h25v8a1 1 0 0 0 1 1h8v35h-9a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1V10a1.092 1.092 0 0 0-.293-.707zM42 9V3.414L47.586 9z" fill="#28282b"/></g></svg>
            </a>
          </div>
        </section>

        <section className="contact">
          <h1>Reach Out!</h1>
          <ContactForm />
        </section>

        <footer className="footer">
          <p className="footer-text">Jakub Vogel</p>
          <p className="footer-text">{email}</p>
          <p className="footer-text">(908) 210-6270</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jakub-vogel" target="_blank" rel="noreferrer">
              <img className="li-icon" src={liIcon} width="37.63" height="32" alt="Linked-in icon" />
            </a>
            <a href="https://github.com/JakubGV" target="_blank" rel="noreferrer">
              <img className="github-icon" src={githubIcon} width="32" height="32" alt="GitHub icon" />
            </a>
        </div>
        </footer>
        
      </div>
      <div className="stripe"></div>
    </>
  );
}

export default PersonalWebsite;