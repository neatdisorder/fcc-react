import React from 'react';
import Drum from './Drum';
import './drummachine-style.css';
import DrumTitle from './DrumTitle';

class DrumMachine extends React.Component {
  
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div>
        <DrumTitle />
        <Drum />
      </div>
    );
  };
    
};

export default DrumMachine;