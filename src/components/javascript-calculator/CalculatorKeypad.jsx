import React from 'react';
import KeyboardButton from './KeyboardButton';
import './calculatorkeypad-style.css';

class CalculatorKeypad extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
       return (
        <div id="calculator-keypad">
            <div className="keypad-column" id="column-numbers">
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='seven' kbdvalue='7' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='eight' kbdvalue='8' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='nine' kbdvalue='9' mouseClick={this.props.mouseClick} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='four' kbdvalue='4' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='five' kbdvalue='5' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='six' kbdvalue='6' mouseClick={this.props.mouseClick} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='one' kbdvalue='1' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='two' kbdvalue='2' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='three' kbdvalue='3' mouseClick={this.props.mouseClick} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='zero' kbdvalue='0' mouseClick={this.props.mouseClick} />
                    <KeyboardButton kbdbuttonid='decimal' kbdvalue='.' mouseClick={this.props.mouseClick} />
                </div>
            </div>
            <div className="keypad-column">
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='add' kbdvalue='+' mouseClick={this.props.mouseClick} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='subtract' kbdvalue='-' mouseClick={this.props.mouseClick} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='multiply' kbdvalue='*' mouseClick={this.props.mouseClick} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='divide' kbdvalue='/' mouseClick={this.props.mouseClick} />  
                </div>
            </div>
            <div className="keypad-column">
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='clear' kbdvalue='C' mouseClick={this.props.clearState} />
                </div>
                <div className="keypad-row">
                    <KeyboardButton kbdbuttonid='equals' kbdvalue='=' mouseClick={this.props.mouseClick} />
                </div>
            </div>
        </div>
        );
    };
};

export default CalculatorKeypad;