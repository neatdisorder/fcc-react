import React from 'react';

class TweetButton extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <a href={this.props.tweetLink} id="tweet-quote" target="">
                    Tweet this quote
            </a>
        );
    };
};

export default TweetButton;