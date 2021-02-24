import React from 'react';
import './drumkeysreference-style.css';

class DrumKeysReference extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="drum-keys-reference">
                <ul>
                    <li>
                        Q: Clap
                    </li>
                    <li>
                        W: Snap
                    </li>
                    <li>
                        E: Clave
                    </li>
                    <li>
                        A: Crash
                    </li>
                    <li>
                        S: Open hi-hat
                    </li>
                    <li>
                        D: Closed hi-hat
                    </li>
                    <li>
                        Z: Rimshot
                    </li>
                    <li>
                        X: Snare
                    </li>
                    <li>
                        C: Kick
                    </li>
                </ul>
            </div>
        )
    }
};

export default DrumKeysReference;