import React from 'react';
import DrumDisplay from './DrumDisplay';
import DrumKeypad from './DrumKeypad';
import './drum-style.css';
import DrumKeysReference from './DrumKeysReference';

class Drum extends React.Component {
    constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.keyboardClick = this.keyboardClick.bind(this);
      this.mouseClick = this.mouseClick.bind(this);
      this.state = {
        lastSample: 'Press a key or click a button'
      };
    };
    
    playSound(input) {
      document.getElementById(input).play();
      this.setState({
        lastSample: input
      });
    };
    
    mouseClick(e) {
      e.preventDefault();
      this.playSound(e.target.innerText);
    };
    
    keyboardClick(e) {
      e.preventDefault();
      let upperKeyPressed = e.key.toUpperCase();
      switch(upperKeyPressed) {
        case 'Q':
        case 'W':
        case 'E':
        case 'A':
        case 'S':
        case 'D':
        case 'Z':
        case 'X':
        case 'C':
          this.playSound(upperKeyPressed);
          break;
      };
    };

    componentDidMount() {
      document.getElementById("drum-container").focus();
    }
    
    render() {
      return (
        <div id="drum-container" onKeyPress={this.keyboardClick} tabIndex="0">
          <div id="drum-machine">
            <DrumKeypad mouseClick={this.mouseClick} />
            <DrumDisplay lastSample={this.state.lastSample} />
          </div>
          <DrumKeysReference />
        </div>
      )
    };
    
};

export default Drum;