import React from 'react';
import QuoteContainer from './QuoteContainer';
import QuoteTitle from './QuoteTitle';
import './quote-style.css';

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
      return (
          <div id='quote-app'>
            <QuoteTitle />
            <QuoteContainer quote={this.state.quote} changeQuote={this.changeQuote} />
          </div>
      );
    };
  };

export default RandomQuoteMachine;