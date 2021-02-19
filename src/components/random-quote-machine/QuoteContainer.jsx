import React from 'react';
import Quote from './Quote';
import './quote-container-style.css';

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div id="quote-container">
              <Quote quote={this.props.quote} imageIndex={this.props.imageIndex} />
            </div>
        )
    };
};

export default QuoteContainer;