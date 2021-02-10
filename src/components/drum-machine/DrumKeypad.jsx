import React from 'react';

class DrumKeypad extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="buttons">
             <div className="button-row">
               <div className="drum-pad" id="q-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   Q
                 </p>
               </div>
               <div className="drum-pad" id="w-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   W
                 </p>
               </div>
               <div className="drum-pad" id="e-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   E
                 </p>
               </div>
             </div>
             <div className="button-row">
               <div className="drum-pad" id="a-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   A
                 </p>
               </div>
               <div className="drum-pad" id="s-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   S
                 </p>
               </div>
               <div className="drum-pad" id="d-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   D
                 </p>
               </div>
             </div>
             <div className="button-row">
               <div className="drum-pad" id="z-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   Z
                 </p>
               </div>
               <div className="drum-pad" id="x-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   X
                 </p>
               </div>
               <div className="drum-pad" id="c-pad" onClick={this.props.mouseClick}>
                 <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" type="audio/mpeg">
                 </audio>
                 <p>
                   C
                 </p>
               </div>
             </div>
          </div>
        );
    };
};

export default DrumKeypad;