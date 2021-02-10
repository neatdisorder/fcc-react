import React from 'react';
import Quote from './Quote';
import QuoteButton from './QuoteButton';

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="quote-container">
              <Quote quote={this.props.quote}/>
              <QuoteButton changeQuote={this.props.changeQuote} />
            </div>
        )
    };
};

export default QuoteContainer;