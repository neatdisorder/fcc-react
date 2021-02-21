import React from 'react';
import './sessionbuttons-style.css';

class SessionButtons extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="session-buttons-container">
                <button id="session-increment" onClick={this.props.sessionIncrement}>
                    +
                </button>
                <p id="session-label">
                    Session length
                </p>
                <p id="session-length">
                    {this.props.sessionLength}
                </p>
                <button id="session-decrement" onClick={this.props.sessionDecrement}>
                    -
                </button>
            </div>
        );
    };
};

export default SessionButtons;