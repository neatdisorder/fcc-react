import React from 'react';
import Drum from './Drum'
import DrumMachineHeader from './DrumMachineHeader';

class DrumMachine extends React.Component {
  
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div>
        <DrumMachineHeader />
        <Drum />
      </div>
    );
  };
    
};

export default DrumMachine;