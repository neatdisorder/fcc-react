import React from 'react';
import Clock from './Clock';
import './clockapp-style.css';

class ClockApp extends React.Component {
    constructor(props) {
      super(props);
    };
    
    render() {
      return (
        <div>
          <audio id="beep">
            <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
          </audio>
          <header>
            <h1>
              This is 25 + 5 clock
            </h1>
          </header>
          <Clock />
        </div>
      );  
    };
  };

export default ClockApp;