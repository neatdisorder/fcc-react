import React from 'react';
import './clock-header-style.css';
import background from '../../assets/React.svg';

class MarkdownPreviewerHeader extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        25 + 5 Clock
                    </h1>
                    <p>
                        A 25 + 5 Clock which can be used to track time using the <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomodoro Technique</a>. 
                    </p>
                </div>
                <img src={background} alt="React logo" />
            </div>
        );
    };
};
export default MarkdownPreviewerHeader;