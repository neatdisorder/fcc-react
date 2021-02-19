import React from 'react';
import './quote-button-style.css';

class QuoteButton extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <button onClick={this.props.changeQuote} id="new-quote">Show me another quote</button>
        );
    };
};

export default QuoteButton;