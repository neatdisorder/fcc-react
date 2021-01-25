import React from 'react';
import Calculator from './Calculator';
import './javascriptcalculator-style.css';

class JavascriptCalculator extends React.Component {
  
    constructor(props) {
      super(props);
    };
    
    render() {
      return (
        <div>
         <header>
           <h1>Calculator</h1>
         </header>
         <Calculator />
         <footer>
           <p>
             This is a footer
           </p>
         </footer>
        </div>
      );
    };
  };

export default JavascriptCalculator;