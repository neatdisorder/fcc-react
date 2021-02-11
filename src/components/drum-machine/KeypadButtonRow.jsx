import React from 'react';
import KeypadButton from './KeypadButton';

class KeypadButtonRow extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="button-row">
                <KeypadButton keyShown={this.props.keyOne} mouseClick={this.props.mouseClick} />
                <KeypadButton keyShown={this.props.keyTwo} mouseClick={this.props.mouseClick} />
                <KeypadButton keyShown={this.props.keyThree} mouseClick={this.props.mouseClick} />
            </div>
        );
    };
};

export default KeypadButtonRow;