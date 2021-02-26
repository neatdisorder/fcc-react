import React from 'react';
import Calculator from './Calculator';
import './javascriptcalculator-style.css';

class JavascriptCalculator extends React.Component {
  
    constructor(props) {
      super(props);
    };
    
    render() {
      return (
        <div id="calculator-container">
          <Calculator />
        </div>
      );
    };
  };

export default JavascriptCalculator;