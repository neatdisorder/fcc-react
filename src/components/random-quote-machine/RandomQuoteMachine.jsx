import React from 'react';
import QuoteContainer from './QuoteContainer';
import QuoteButtons from './QuoteButtons';
import './random-quote-machine-style.css';

class RandomQuoteMachine extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        quote: Math.floor(Math.random() * 5)
      };
      this.changeQuote = this.changeQuote.bind(this);
    };
    
    changeQuote() {

        let numberQuote = Math.floor(Math.random() * 5);

        if (numberQuote === this.state.quote) {
            if (numberQuote === 4) {
                this.setState({
                    quote: numberQuote - 1
                });
            } else {
                this.setState({
                    quote: numberQuote + 1
                });
            }
        } else {
            this.setState({
                quote: numberQuote
            })
        }
    }
    
    render() {

      const quotes = ["\"I can't understand why people are frigthened of new ideas. I'm frightened of the old ones.\"", "\"There is no such thing as an empty space or an empty time. There is always something to see, something to hear. In fact, try as we may to make a silence, we cannot.\"", "\"There is poetry as soon as we realize that we possess nothing.\"", "\"If something is boring after two minutes, try it for four. If still boring, then eight. Then sixteen. Then thirty-two. Eventually one discovers that it is not boring at all.\"", "\"We need not to destroy the past. It is gone.\""];

      const images = ['../../assets/john-cage-1.jpg', '../../assets/john-cage-2.jpg', '../../assets/john-cage-3.jpg', '../../assets/john-cage-4.jpg', '../../assets/john-cage-5.png'];

      return (
          <div id='quote-app'>
            <QuoteContainer quote={quotes[this.state.quote]} imageIndex={this.state.quote} />
            <QuoteButtons quote={quotes[this.state.quote]} changeQuote={this.changeQuote} />
          </div>
      );
    };
  };

export default RandomQuoteMachine;