import React from 'react';
import BreakButtons from './BreakButtons';
import SessionButtons from './SessionButtons';
import './buttons-style.css';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="clock-buttons">
                <BreakButtons breakIncrement={this.props.breakIncrement} breakDecrement={this.props.breakDecrement} breakLength={this.props.breakLength} />
                <SessionButtons sessionIncrement={this.props.sessionIncrement} sessionDecrement={this.props.sessionDecrement} sessionLength={this.props.sessionLength} />
            </div>
        );
    };
};

export default Buttons;