import React from 'react';
import './keypad-button-style.css';
import qSound from '../../assets/drum-machine-samples/clap.wav';
import wSound from '../../assets/drum-machine-samples/snap.wav';
import eSound from '../../assets/drum-machine-samples/clave.wav';
import aSound from '../../assets/drum-machine-samples/crash.wav';
import sSound from '../../assets/drum-machine-samples/openhh.wav';
import dSound from '../../assets/drum-machine-samples/closedhh.wav';
import zSound from '../../assets/drum-machine-samples/rimshot.wav';
import xSound from '../../assets/drum-machine-samples/snare.wav';
import cSound from '../../assets/drum-machine-samples/kick.wav';

class KeypadButton extends React.Component {
    constructor(props) {
        super(props);
    };    

    render() {

        const drumPadId = this.props.keyShown.toLowerCase() + '-pad';

        const soundSamples = {
            Q: qSound,
            W: wSound,
            E: eSound,
            A: aSound,
            S: sSound,
            D: dSound,
            Z: zSound,
            X: xSound,
            C: cSound,
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