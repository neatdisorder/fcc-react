import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import RandomQuoteMachine from './components/random-quote-machine/RandomQuoteMachine';
import MarkdownPreviewer from './components/markdown-previewer/MarkdownPreviewer';
import DrumMachine from './components/drum-machine/DrumMachine';
import JavascriptCalculator from './components/javascript-calculator/JavascriptCalculator';
import ClockApp from './components/clock/ClockApp';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <BrowserRouter>
          <div id="header-container">
            <Header />
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/random-quote-machine'component={RandomQuoteMachine} />
            <Route path='/markdown-previewer' component={MarkdownPreviewer} />
            <Route path='/drum-machine' component={DrumMachine} />
            <Route path='/javascript-calculator' component={JavascriptCalculator} />
            <Route path='/clock' component={ClockApp} />
          </Switch>
          <Footer />
      </BrowserRouter>
    );
  };
};

export default App;
