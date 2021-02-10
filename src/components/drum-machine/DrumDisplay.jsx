import React from 'react';

class DrumDisplay extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="text-output">
                <p id="display">
                    {this.props.lastSample}
                </p>
            </div>
        );
    };
};

export default DrumDisplay;