import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import KeyboardButton from './KeyboardButton';

class Calculator extends React.Component {
  
    constructor(props) {
      super(props);
      
      // CALCULATOR STATE
      
      this.state = {
        display: 0,
        provValue: ''
      }
      
      // HANDLE BINDINGS
      
      this.mouseClick = this.mouseClick.bind(this);
      this.clearState = this.clearState.bind(this);
      this.inputNumber = this.inputNumber.bind(this);
    };
    
    // MOUSE CLICK EVENT
    
    mouseClick(e) {
      e.preventDefault();
      this.inputNumber(e.target.innerText);
    };
    
    // INPUT EVENT
    
    inputNumber(num) {
      
      // IF THE INPUT IS A NUMBER
      
      if (!isNaN(num)) {
        
        // IF DISPLAY IS SET TO 0
        
        if (this.state.display == 0) {
          this.setState({
            display: num,
            provValue: num
          });
        } else {
          
          // IF DISPLAY IS NOT SET TO 0
          
          this.setState({
            display: this.state.display + num,
            provValue: this.state.provValue + num
          });
        }
        
        // IF THE INPUT IS A DOT
        
      } else if (num == '.') {
        
        // IF THIS VALUE IS EMPTY
        
        if (this.state.provValue == '') {
          if (this.state.display == 0) {  
            this.setState({
              display: '0.',
              provValue: '0.'
            });
          } else {
            this.setState({
              display: this.state.display + "0.",
              provValue: '0.'
            });
          }
          
          // IF THE VALUE ALREADY HAS A DOT
          
        } else if (this.state.provValue.indexOf('.') == -1) {
          this.setState({
            display: this.state.display + num,
            provValue: this.state.provValue + num
          });
        }
        
        // IF THE VALUE IS AN OPERATOR (+ EQUAL)
        
      } else {
        
        // IF THE VALUE IS AN OPERATOR (NOT EQUAL)
   
        if (num !== '=') {
          
          console.log(this.state.display);
  
          if (num == '-') {
            if (this.state.display == 0) {
              this.setState({
                display: '-',
                provValue: '-'
              });
            } else {
                this.setState({
                  display: this.state.display + num,
                  provValue: ''
                });
            }
          } else {
            if (!isNaN(this.state.display.charAt(this.state.display.length - 1))) {
              this.setState({
                display: this.state.display + num,
                provValue: ''
              });
            } else {
              
             console.log('AAAA');
  
             console.log(this.state.display);
              
              do {
                this.state.display = this.state.display.slice(0, -1);
                console.log(this.state.display);
              } while (isNaN(this.state.display.charAt(this.state.display.length - 1)));
  
              console.log(this.state.display);
  
                this.setState({
                  display: this.state.display + num,
                  provValue: ''
                });
  
              }
          }
          
        } else if (num == "=") {
          // IF THE VALUE IS EQUAL
          
          let calculationString = this.state.display;
          let isThisTheResult = eval(calculationString);
          this.setState({
            display: isThisTheResult.toString(),
            provValue: ''
          });
          
          console.log(this.state);
          
        }
      }
    };
    
    // CLEAR STATE FUNCTION
    
    clearState(e) {
      e.preventDefault();
      this.setState({
        display: '0',
        provValue: ''
      });
    };
    
    // RENDER
    
    render() {
      return (
        <main id="calculator">
          <CalculatorDisplay display={this.state.display} />
          <div id="keyboard-numbers">
            <KeyboardButton kbdbuttonid='zero' kbdvalue='0' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='one' kbdvalue='1' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='two' kbdvalue='2' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='three' kbdvalue='3' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='four' kbdvalue='4' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='five' kbdvalue='5' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='six' kbdvalue='6' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='seven' kbdvalue='7' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='eight' kbdvalue='8' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='nine' kbdvalue='9' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='decimal' kbdvalue='.' mouseClick={this.mouseClick} />
          </div>
          <div id="keyboard-operators">
            <KeyboardButton kbdbuttonid='add' kbdvalue='+' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='subtract' kbdvalue='-' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='multiply' kbdvalue='*' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='divide' kbdvalue='/' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='equals' kbdvalue='=' mouseClick={this.mouseClick} />
            <KeyboardButton kbdbuttonid='clear' kbdvalue='C' mouseClick={this.clearState} />
            </div>
        </main>
      )
    };
  };

export default Calculator;