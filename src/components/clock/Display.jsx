import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
            <h3 id="timer-label">
              {this.props.currentPeriod}
            </h3>
            <h2 id="time-left">
              {this.props.timeOnDisplay}
            </h2>
          </div>
        );
    };

};

export default Display;