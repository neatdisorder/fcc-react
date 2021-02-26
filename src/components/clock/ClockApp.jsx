import React from 'react';
import Clock from './Clock';

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
          <Clock />
        </div>
      );  
    };
  };

export default ClockApp;