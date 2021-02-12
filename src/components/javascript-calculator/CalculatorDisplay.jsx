import React from 'react';

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