import React from 'react';

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
      console.log('Play sound test');
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
      console.log(e.key);
      let upperKeyPressed = e.key.toUpperCase();
      console.log(upperKeyPressed);
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
    
    render() {
      return (
        <div id="drum-machine" onKeyPress={this.keyboardClick} tabIndex="0">
          <div id="buttons">
             <div className="button-row">
               <div className="drum-pad" id="q-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   Q
                 </p>
               </div>
               <div className="drum-pad" id="w-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   W
                 </p>
               </div>
               <div class="drum-pad" id="e-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   E
                 </p>
               </div>
             </div>
             <div className="button-row">
               <div className="drum-pad" id="a-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   A
                 </p>
               </div>
               <div class="drum-pad" id="s-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   S
                 </p>
               </div>
               <div className="drum-pad" id="d-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   D
                 </p>
               </div>
             </div>
             <div class="button-row">
               <div class="drum-pad" id="z-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   Z
                 </p>
               </div>
               <div className="drum-pad" id="x-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   X
                 </p>
               </div>
               <div class="drum-pad" id="c-pad" onClick={this.mouseClick}>
                 <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   C
                 </p>
               </div>
             </div>
          </div>
          <div id="text-output">
            <p id="display">
              {this.state.lastSample}
            </p>
          </div>
        </div>
      )
    };
    
};

export default Drum;