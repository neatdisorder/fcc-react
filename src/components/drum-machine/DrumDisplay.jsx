import React from 'react';
import './drum-display-style.css';

class DrumDisplay extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const soundNames = {
            'Q': 'Clap',
            'W': 'Snap',
            'E': 'Clave',
            'A': 'Crash',
            'S': 'Open hi-hat',
            'D': 'Closed hi-hat',
            'Z': 'Rimshot',
            'X': 'Snare',
            'C': 'Kick'
        };

        return (
            <div id="text-output">
                <p id="drum-display">
                    {soundNames[this.props.lastSample] || this.props.lastSample}
                </p>
            </div>
        );
    };
};

export default DrumDisplay;