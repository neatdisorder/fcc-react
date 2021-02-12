import React from 'react';

class KeyboardNumberButton extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="key" id={this.props.kbdbuttonid} onClick={this.props.mouseClick}>
                <p>
                    {this.props.kbdvalue}
                </p>
            </div>
        );
    };
};

export default KeyboardNumberButton;