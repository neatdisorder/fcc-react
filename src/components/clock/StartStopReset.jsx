import React from 'react';

class StartStopReset extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="buttons-startstop">
                <button id="start_stop" onClick={this.props.startStopTimer}>
                    START/STOP
                </button>
                <button id="reset" onClick={this.props.handleReset}>
                    RESET
                </button>
            </div>
        );
    };
};

export default StartStopReset;