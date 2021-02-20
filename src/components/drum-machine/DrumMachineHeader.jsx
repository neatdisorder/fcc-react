import React from 'react';
import './drum-machine-header-style.css';
import background from '../../assets/React.svg';

class DrumMachineHeader extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        Drum Machine
                    </h1>
                    <p>
                        A Drum Machine that plays audio samples using both mouse and keyboard. 
                    </p>
                </div>
                <img src={background} alt="React logo" />
            </div>
        );
    };
};
export default DrumMachineHeader;