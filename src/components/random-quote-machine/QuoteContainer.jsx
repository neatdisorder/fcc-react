import React from 'react';
import Quote from './Quote';
import QuoteButton from './QuoteButton';
import TweetButton from './TweetButton';
import './quote-container-style.css';

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

    const tweetLink = `https://twitter.com/intent/tweet?=${this.props.quote} (John Cage)`;

        return (
            <div id="quote-container">
              <Quote quote={this.props.quote} imageIndex={this.props.imageIndex} />
              <div id="quote-buttons">
                <QuoteButton changeQuote={this.props.changeQuote} />
                <TweetButton tweetLink={tweetLink} />
              </div>
            </div>
        )
    };
};

export default QuoteContainer;