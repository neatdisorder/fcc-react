import React from 'react';

class KeypadButton extends React.Component {
    constructor(props) {
        super(props);
    };    

    render() {

        const drumPadId = this.props.keyShown.toLowerCase() + '-pad';

        const soundSamples = {
            Q: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
            W: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
            E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            A: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            D: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
            Z: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
            X: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
            C: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        };

        return (
            <div className="drum-pad" id={drumPadId} onClick={this.props.mouseClick}>
                <audio className="clip" id={this.props.keyShown} src={soundSamples[this.props.keyShown]} type="audio/mpeg">
                </audio>
                <p>
                    {this.props.keyShown}
                </p>
            </div>
        );
    };
};

export default KeypadButton;