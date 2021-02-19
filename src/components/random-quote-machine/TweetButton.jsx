import React from 'react';
import './tweet-button-style.css';

class TweetButton extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <a href={this.props.tweetLink} id="tweet-quote">
                Tweet this quote
            </a>
        );
    };
};

export default TweetButton;