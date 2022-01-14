import React from 'react';
import WebFont from 'webfontloader';
import {Link} from 'react-scroll'

import './App.css';
import headshot from './cropped_headshot_small.jpg';

WebFont.load({
  google: {
    families: ['Open Sans']
  }
})

function App() {
  const sections = ["Home", "About", "Resume", "Contact"]
  const image_caption = "ECE Student at Rutgers University";
  const about_me = "I am a senior electrical and computer engineering student at Rutgers University as a member of the Honors College. I am pursuing a minor in business administration to integrate business and engineering principles and lead an engaging, challenging career as an engineer.";
  //let about_me = "text"

  return (
    <div className="main">
      <div className="menu-bar">
        <div className="name-left">
          <h1 className="name">Jakub Vogel</h1>
        </div>
        <div className="row-right">
          {
            sections.map( (tabName: string) => {
              const toString = tabName.toLowerCase();
              
              return (
                <div className="tab">
                  <Link to={toString} smooth={true}>
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
            <img src={headshot} alt="Headshot"/>
            <div className="caption">{image_caption}</div>
          </div>
        </div>

        <div id="about">
          <h2 className="about-header">About Me</h2>
          <div className="about-text">{about_me}</div>
        </div>

        <div id="resume">
          <h2>Resume</h2>
        </div>

        <div id="contact">
          <h2>Contact Me</h2>
        </div>
      </div>
    </div>
  );
}

export default App;