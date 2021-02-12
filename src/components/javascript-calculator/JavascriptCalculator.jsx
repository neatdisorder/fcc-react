import React from 'react';
import Calculator from './Calculator';
import CalculatorTitle from './CalculatorTitle';
import './javascriptcalculator-style.css';

class JavascriptCalculator extends React.Component {
  
    constructor(props) {
      super(props);
    };
    
    render() {
      return (
        <div>
          <CalculatorTitle />
          <Calculator />
        </div>
      );
    };
  };

export default JavascriptCalculator;