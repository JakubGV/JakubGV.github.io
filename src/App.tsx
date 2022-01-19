import { useEffect, useState } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Document, Page, pdfjs } from 'react-pdf';

import { TypingText } from './TypingText'
import { ContactForm } from './ContactForm'

import headshot from './media/cropped_headshot_small.jpg';
import upArrow from './media/up_arrow.svg'
import liIcon from './media/linkedin.png'
import githubIcon from './media/GitHub-32px.png'

import myResume from './media/Vogel_Resume_2021.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

WebFont.load({
  google: {
    families: ['Open Sans']
  }
});

function App() {
  const sections = ["Home", "About", "Resume", "Contact"]
  const image_caption = "ECE Student at Rutgers University";
  const about_me = "I am a senior electrical and computer engineering student at Rutgers University as a member of the Honors College. I am pursuing a minor in business administration to integrate business and engineering principles and lead an engaging, challenging career as an engineer.";
  
  const rotatingWords = ['solve problems.', 'build solutions.', 'learn new things.']
  
  const [showButton, setShowButton] = useState(false);

  useEffect( () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="main">
      <div className="menu-bar">
        <div className="name-left">
          <h1 className="name">Jakub Vogel</h1>
        </div>
        <div className="row-right">
          {
            sections.map( (tabName: string) => {
              const divLinkName = tabName.toLowerCase();
              
              return (
                <div className="tab">
                  <Link to={divLinkName} smooth={true}>
                    {tabName}
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>

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
            <div className="about-text">{about_me}</div>
        </div>

        <div id="resume">
          <h2>Resume</h2>
          <Document file={myResume} >
            <Page pageNumber={1} scale={1.5} />
          </Document>
        </div>

        <div id="contact">
          <h2>Contact Me</h2>
          <ContactForm />
          <div className="line">Jakub Vogel</div>
          <div className="line">jakub.vogel@rutgers.edu</div>
          <div className="line">(908) 210-6270</div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jakub-vogel" target="_blank" rel="noreferrer">
              <img className="li-icon" src={liIcon} alt="Linked-in icon" />
            </a>
            <a href="https://github.com/JakubGV" target="_blank" rel="noreferrer">
              <img className="github-icon" src={githubIcon} alt="GitHub icon" />
            </a>
          </div>
        </div>
      </div>
      
      {
        showButton &&
        <div className="arrow-button" onClick={scroll.scrollToTop}>
          <img className="arrow" src={upArrow} alt="Up arrow"/>
        </div>
      }
    </div>
  );
}

export default App;