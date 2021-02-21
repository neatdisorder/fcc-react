import React from 'react';
import './drum-display-style.css';

class DrumDisplay extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="text-output">
                <p id="drum-display">
                    {this.props.lastSample}
                </p>
            </div>
        );
    };
};

export default DrumDisplay;