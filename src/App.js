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
import Masthead from './components/Masthead';
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
            <Route exact path='/'>
              <Masthead value={0} />
              <Home />
            </Route>
            <Route exact path='/random-quote-machine'>
              <Masthead value={1} />
              <RandomQuoteMachine />
            </Route>
            <Route exact path='/markdown-previewer'>
              <Masthead value={2} />
              <MarkdownPreviewer />
            </Route>
            <Route exact path='/drum-machine'>
              <Masthead value={3} />
              <DrumMachine />
            </Route>
            <Route exact path='/javascript-calculator'>
              <Masthead value={4} />
              <JavascriptCalculator />
            </Route>
            <Route exact path='/clock'>
              <Masthead value={5} />
              <ClockApp />
            </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
    );
  };
};

export default App;
