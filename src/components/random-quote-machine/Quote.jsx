import React from 'react';

class Quote extends React.Component {
  
    constructor(props) {
      super(props);
    };
    
    render() {
      
        const quotes = ["\"I can't understand why people are frigthened of new ideas. I'm frightened of the old ones.\"", "\"There is no such thing as an empty space or an empty time. There is always something to see, something to hear. In fact, try as we may to make a silence, we cannot.\"", "\"There is poetry as soon as we realize that we possess nothing\"", "\"If something is boring after two minutes, try it for four. If still boring, then eight. Then sixteen. Then thirty-two. Eventually one discovers that it is not boring at all.\"", "\"We need not to destroy the past. It is gone\""];
      
        const tweetLink = `https://twitter.com/intent/tweet?=${quotes[this.props.quote]} (John Cage)`;
      
        return (
            <section>
                <p id="quote-text">
                    {quotes[this.props.quote]}
                </p>
                <a href={tweetLink} id="tweet-quote" target="">
                    Tweet this quote
                </a>
            </section>
        );
    };
    
  };

  export default Quote;