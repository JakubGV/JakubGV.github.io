import React from 'react';
import './App.css';

function App() {
  const sections = ["Home", "About", "Resume", "Contact"]
  
  return (
    <div className="main">
      <div className="menu-bar">
        <div className="name-left">
          <h1>left</h1>
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

      <div className="body">
        <h1>body</h1>
      </div>
    </div>
  );
}

export default App;