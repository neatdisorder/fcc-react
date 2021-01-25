import React from 'react';
import Drum from './Drum';
import './drummachine-style.css';

class DrumMachine extends React.Component {
  
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div>
        <header>
          <h1>
            This is a Drum Machine
          </h1>
        </header>
        <Drum />
      </div>
    );
  };
    
};

export default DrumMachine;