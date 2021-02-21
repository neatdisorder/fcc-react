import React from 'react';
import './breakbuttons-style.css';

class BreakButtons extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="break-buttons-container">
                <button id="break-increment" onClick={this.props.breakIncrement}>
                    +
                </button>
                <p id="break-label">
                    Break length
                </p>
                <p id="break-length">
                    {this.props.breakLength}
                </p>
                <button id="break-decrement" onClick={this.props.breakDecrement}>
                    -
                </button>
            </div>
        );
    };
};

export default BreakButtons;