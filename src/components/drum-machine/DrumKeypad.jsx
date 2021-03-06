import React from 'react';
import KeypadButtonRow from './KeypadButtonRow';
import './drum-keypad-style.css';

class DrumKeypad extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="drum-buttons">
              <KeypadButtonRow keyOne='Q' keyTwo='W' keyThree='E' mouseClick={this.props.mouseClick} />
              <KeypadButtonRow keyOne='A' keyTwo='S' keyThree='D' mouseClick={this.props.mouseClick} />
              <KeypadButtonRow keyOne='Z' keyTwo='X' keyThree='C' mouseClick={this.props.mouseClick} />
            </div>
        );
    };
};

export default DrumKeypad;