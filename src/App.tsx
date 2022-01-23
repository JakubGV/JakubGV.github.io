import './App.css';

import { TypingText } from './TypingText';
import { ContactForm } from './ContactForm';
import { MenuBar } from './MenuBar';
import { ResumePreview } from './ResumePreview';
import { AboutContent } from './AboutContent';
import { ScrollToTopButton } from './ScrollToTopButton';

import headshot from './media/cropped_headshot_small.jpg';
import liIcon from './media/linkedin.png';
import githubIcon from './media/GitHub-32px.png';
import email from './media/email.svg';
import phone from './media/phone.svg';

function App() {
  const sections = ['Home', 'About', 'Resume', 'Contact'];
  const image_caption = 'ECE Student at Rutgers University';
  const rotatingWords = ['solve problems.', 'build solutions.', 'learn new things.'];
  
  const about = ['I\'m an aspiring software engineer. That means I like technology and writing code. But really? I have the opportunity to build and create solutions that can reach all types of people, all while learning new things every day.',
                 'Currently, I am a senior electrical and computer engineering student at Rutgers University as a member of the Honors College. On top of that, I am pursuing a minor in business administration to better integrate business and engineering principles to lead an engaging, challenging career.',
                 'As for this website, I can proudly say I built it from scratch. There is nothing but handmade HTML, CSS, JavaScript, and a little help from ReactJS. If you have any questions about how I made it or otherwise, don\'t hesitate to contact me below!',
                ];
  
  const resume_link = 'https://drive.google.com/file/d/1SdDAy_aMrn-uYSr-kKWk2YtpEbBrEp8a/view?usp=sharing';
  const resume_preview = [{
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

  const to_top_displacement = 300;
  
  return (
    <div className="main">
      <MenuBar header="Jakub Vogel" sections={sections}/>

      <div className="pages">
        <div className="home">
          <div className="welcome-info">
            <img className="headshot" src={headshot} alt="Headshot"/>
            <div className="caption">{image_caption}</div>
            <div className="caption caption-main">
              <span>I like to</span>
              <TypingText textOptions={rotatingWords}/>
            </div>
          </div>
        </div>

        <div id="about">
            <h2 className="about-header">About</h2>
            <AboutContent paragraphs={about} />
        </div>

        <div id="resume">
          <div className="content-holder">
            <h2>Resume Highlights</h2>
            <ResumePreview resumeLink={resume_link} preview={resume_preview}/>
          </div>
        </div>

        <div id="contact">
          <h2>Contact Me</h2>
          <ContactForm />
          <br />
          <div className="line">Jakub Vogel</div>
          <div className="line">
            <img className="email-icon" src={email} width="20" height="20" alt="Email" />
            jakub.vogel@rutgers.edu
          </div>
          <div className="line">
            <img className="phone-icon" src={phone} width="20" height="20" alt="Phone" />
            (908) 210-6270
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jakub-vogel" target="_blank" rel="noreferrer">
              <img className="li-icon" src={liIcon} width="37.63" height="32" alt="Linked-in icon" />
            </a>
            <a href="https://github.com/JakubGV" target="_blank" rel="noreferrer">
              <img className="github-icon" src={githubIcon} width="32" height="32" alt="GitHub icon" />
            </a>
          </div>
        </div>
      </div>
      
      <ScrollToTopButton displacement={to_top_displacement} />
    </div>
  );
}

export default App;