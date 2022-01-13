import React from 'react';
import WebFont from 'webfontloader'

import './App.css';
import headshot from './cropped_headshot_small.jpg'

WebFont.load({
  google: {
    families: ['Open Sans']
  }
})

function App() {
  const sections = ["Home", "About", "Resume", "Contact"]
  
  return (
    <div className="main">
      
      <div className="menu-bar">
        <div className="name-left">
          <h1 className="name">Jakub Vogel</h1>
        </div>
        <div className="row-right">
          {
            sections.map( (tabName: string) => {
              return (
                <div className="tab">
                  {tabName}
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
            <div>Text under name here</div>
          </div>
        </div>

        <div className="about">
          about
        </div>

        <div className="resume">
          resume
        </div>

        <div className="contact">
          contact
        </div>
      </div>
    
    </div>
  );
}

export default App;