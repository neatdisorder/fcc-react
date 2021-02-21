import React from 'react';
import Calculator from './Calculator';
import CalculatorHeader from './CalculatorHeader';
import './javascriptcalculator-style.css';

class JavascriptCalculator extends React.Component {
  
    constructor(props) {
      super(props);
    };
    
    render() {
      return (
        <div id="calculator-container">
          <CalculatorHeader />
          <Calculator />
        </div>
      );
    };
  };

export default JavascriptCalculator;