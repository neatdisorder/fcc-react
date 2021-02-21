import React from 'react';
import './calculatorheader-style.css';
import background from '../../assets/React.svg';

class CalculatorHeader extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-header">
                <div id="home-header-container">
                    <h1>
                        Javascript Calculator
                    </h1>
                    <p>
                        A simple calculator programmed in javascript using React.
                    </p>
                </div>
                <img src={background} alt="React logo" />
            </div>
        );
    };
};

export default CalculatorHeader;