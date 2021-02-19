import React from 'react';
import QuoteButton from './QuoteButton';
import TweetButton from './TweetButton';
import './quote-buttons-style.css';

class QuoteButtons extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const tweetLink = `https://twitter.com/intent/tweet?=${this.props.quote} (John Cage)`;

        return (
            <div id="quote-buttons">
                <QuoteButton changeQuote={this.props.changeQuote} />
                <TweetButton tweetLink={tweetLink} />
            </div>
        );
    };
};

export default QuoteButtons;