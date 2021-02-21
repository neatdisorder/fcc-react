import React from 'react';
import './calculatordisplay-style.css';

class CalculatorDisplay extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="display">
                {this.props.display}
            </div>
        );
    };
};

export default CalculatorDisplay;