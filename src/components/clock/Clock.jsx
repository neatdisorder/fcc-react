import React from 'react';
import Buttons from './Buttons';
import Display from './Display';
import StartStopReset from './StartStopReset';
import './clock-style.css';

let timerID;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOnDisplay: '',
      isTimerRunning: false,
      isSessionInProgress: false,
      timerObject: new Date(),
      breakLength: 5,
      sessionLength: 25,
      currentPeriod: 'Session'
    };
  this.handleReset = this.handleReset.bind(this);
  this.breakDecrement = this.breakDecrement.bind(this);
  this.breakIncrement = this.breakIncrement.bind(this);
  this.sessionIncrement = this.sessionIncrement.bind(this);
  this.sessionDecrement = this.sessionDecrement.bind(this);
  this.startStopTimer = this.startStopTimer.bind(this);
  };
  
  componentDidMount() {
    this.state.timerObject.setMinutes(24);
    this.state.timerObject.setSeconds(60);
    this.setState({
      timeOnDisplay: this.state.timerObject.getMinutes() + (":0") + this.state.timerObject.getSeconds()
    });
  };
  
  handleReset() {
    this.state.timerObject.setMinutes(24);
    this.state.timerObject.setSeconds(60);
    this.setState({
      timeOnDisplay: this.state.timerObject.getMinutes() + (":0") + this.state.timerObject.getSeconds(),
      isTimerRunning: false,
      isSessionInProgress: false,
      breakLength: 5,
      sessionLength: 25,
      currentPeriod: 'Session'
    });
    clearInterval(timerID);
    let audioStop = document.getElementById("beep");
    audioStop.pause();
    audioStop.currentTime = 0;
  }
  
  breakDecrement() {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength -1
      }); 
    }
  };
  
  breakIncrement() {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  
  sessionDecrement() {
    if (this.state.sessionLength > 1) {
      this.state.timerObject.setMinutes(this.state.sessionLength - 1);
      this.setState({
        sessionLength: this.state.sessionLength -1,
        timeOnDisplay: (this.state.timerObject.getMinutes() > 9 ? (this.state.timerObject.getMinutes() == 0 ? "60" : this.state.timerObject.getMinutes()) : "0" + this.state.timerObject.getMinutes()) + ":" + (this.state.timerObject.getSeconds() > 9 ? this.state.timerObject.getSeconds() : "0" + this.state.timerObject.getSeconds())
      });
    }
  };
  
  sessionIncrement() {
    
    if (this.state.sessionLength < 59) {
      
      this.state.timerObject.setMinutes(this.state.sessionLength + 1);
            this.setState({
              sessionLength: this.state.sessionLength + 1,
              timeOnDisplay: (this.state.timerObject.getMinutes() > 9 ? (this.state.timerObject.getMinutes() == 0 ? "60" : this.state.timerObject.getMinutes()) : "0" + this.state.timerObject.getMinutes()) + ":" + (this.state.timerObject.getSeconds() > 9 ? this.state.timerObject.getSeconds() : "0" + this.state.timerObject.getSeconds())
            });
      
    } else if (this.state.sessionLength == 59) {
      
      this.state.timerObject.setMinutes(this.state.sessionLength + 1);
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeOnDisplay: "60:" + (this.state.timerObject.getSeconds() > 9 ? this.state.timerObject.getSeconds() : "0" + this.state.timerObject.getSeconds())
      });
      
    }
    
  };
  
  /// START STOP TIMER
  
  startStopTimer() {
    
    if (this.state.isTimerRunning == false) {
      
      timerID = setInterval(() => {
      
      ///
          if (this.state.timeOnDisplay !== '00:00') {
      ///
      
            let oldSecondsValue = this.state.timerObject.getSeconds();
            this.state.timerObject.setSeconds(oldSecondsValue - 1);
            this.setState({
              timeOnDisplay: (this.state.timerObject.getMinutes() > 9 ? (this.state.timerObject.getMinutes() == 0 ? "60" : this.state.timerObject.getMinutes()) : "0" + this.state.timerObject.getMinutes()) + ":" + (this.state.timerObject.getSeconds() > 9 ? this.state.timerObject.getSeconds() : "0" + this.state.timerObject.getSeconds())
            });
      
      ///
          } else {
            
            let audio = document.getElementById("beep");
            audio.play();
            
            if (this.state.currentPeriod == 'Session') {
              this.state.timerObject.setMinutes(this.state.breakLength);
              this.setState({
              timeOnDisplay: (this.state.timerObject.getMinutes() > 9 ? (this.state.timerObject.getMinutes() == 0 ? "60" : this.state.timerObject.getMinutes()) : "0" + this.state.timerObject.getMinutes()) + ":" + (this.state.timerObject.getSeconds() > 9 ? this.state.timerObject.getSeconds() : "0" + this.state.timerObject.getSeconds()),
              currentPeriod: 'Break'
              });
            } else if (this.state.currentPeriod == 'Break') {
              this.state.timerObject.setMinutes(this.state.sessionLength);
              this.setState({
              timeOnDisplay: (this.state.timerObject.getMinutes() > 9 ? (this.state.timerObject.getMinutes() == 0 ? "60" : this.state.timerObject.getMinutes()) : "0" + this.state.timerObject.getMinutes()) + ":" + (this.state.timerObject.getSeconds() > 9 ? this.state.timerObject.getSeconds() : "0" + this.state.timerObject.getSeconds()),
              currentPeriod: 'Session'
              });
            }
          }
      ///  
      
      }, 1000);
      
      this.setState({
        isTimerRunning: true
      });
      
    } else {

      clearInterval(timerID);

      this.setState({
        isTimerRunning: false,
      });
      
    }
    
  };
  
  /// START STOP TIMER
  
  render() {
    return (
      <div id="clock-app">
        <div id="clock-container">
          <Buttons breakIncrement={this.breakIncrement} breakLength={this.state.breakLength} breakDecrement={this.breakDecrement} sessionIncrement={this.sessionIncrement} sessionLength={this.state.sessionLength} sessionDecrement={this.sessionDecrement} />
          <Display currentPeriod={this.state.currentPeriod} timeOnDisplay={this.state.timeOnDisplay} />
          <StartStopReset startStopTimer={this.startStopTimer} handleReset={this.handleReset} />
        </div>
      </div>
    );  
  };
};

export default Clock;