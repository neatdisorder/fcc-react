import React from 'react';

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
          <div>
            <div id="display">
              {this.state.display}
            </div>
            <div>
              Prov value: {this.state.provValue}
            </div>
          </div>
          <div id="keyboard-numbers">
            <div className="key" id="zero" onClick={this.mouseClick}>
              <p>
                0
              </p>
            </div>
            <div className="key" id="one" onClick={this.mouseClick}>
              <p>
                1
              </p>
            </div>
            <div className="key" id="two" onClick={this.mouseClick}>
              <p>
                2
              </p>
            </div>
            <div className="key" id="three" onClick={this.mouseClick}>
              <p>
                3
              </p>
            </div>
            <div className="key" id="four" onClick={this.mouseClick}>
              <p>
                4
              </p>
            </div>
            <div className="key" id="five" onClick={this.mouseClick}>
              <p>
                5
              </p>
            </div>
            <div className="key" id="six" onClick={this.mouseClick}>
              <p>
                6
              </p>
            </div>
            <div className="key" id="seven" onClick={this.mouseClick}>
              <p>
                7
              </p>
            </div>
            <div className="key" id="eight" onClick={this.mouseClick}>
              <p>
                8
              </p>
            </div>
            <div className="key" id="nine" onClick={this.mouseClick}>
              <p>
                9
              </p>
            </div>
            <div className="key" id="decimal" onClick={this.mouseClick}>
              <p>
                .
              </p>
            </div>
           </div>
            <div id="keyboard-operators">
              <div className="key" id="add" onClick={this.mouseClick}>
                <p>
                  +
                </p>
              </div>
              <div className="key" id="subtract" onClick={this.mouseClick}>
                <p>
                  -
                </p>
              </div>
              <div className="key" id="multiply" onClick={this.mouseClick}>
                <p>
                  *
                </p>
              </div>
              <div className="key" id="divide" onClick={this.mouseClick}>
                <p>
                  /
                </p>
              </div>
              <div className="key" id="equals" onClick={this.mouseClick}>
                <p>
                  =
                </p>
              </div>
              <div className="key" id="clear" onClick={this.clearState}>
                <p>
                  C
                </p>
              </div>
            </div>
        </main>
      )
    };
  };

export default Calculator;