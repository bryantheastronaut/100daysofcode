import React, {Component} from 'react';
import {Header} from '../components/Header';
import {TimeDisplay} from '../components/TimeDisplay';
import {MINUTE, SECOND} from '../utils';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLength: 0,
      completed: 0,
      paused: false,
      timeLeft: 0
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.tick = this.tick.bind(this);
  }
  handleTimeChange(x) {
    if (x === 'INC') {
      // increase timer by 1 minute.
      this.setState({timerLength: this.state.timerLength + MINUTE});
    }
    else if (x === 'DEC') {
      if (this.state.timerLength < 1) return;
      // decrease by 1 min.
      this.setState({timerLength: this.state.timerLength - MINUTE});
    }
    else {
      return;
    }
  }
  startTimer() {
    clearInterval(this.timerId);
    this.setState({timeLeft: this.state.timerLength});
    process.nextTick(() => {
      this.timerId = setInterval(() => {
        this.tick()
      }, SECOND);
    });
  }
  pauseTimer() {
    this.setState({paused: !this.state.paused});
    if (this.state.paused) {
      this.timerId = setInterval(() => {
        this.tick();
      }, 1000);
    } else { // pause
      clearInterval(this.timerId);
    }
  }
  resetTimer() {
    this.setState({timeLeft: 999, paused: false, timerLength: 0});
  }
  tick() {
    let {timeLeft} = this.state;
    this.setState({timeLeft: timeLeft - SECOND});
    if (timeLeft <= SECOND) {
      clearInterval(this.timerId);
    }
  }
  render() {
    return (
      <div>
        <Header
          timerLength={this.state.timerLength}
          onTimeChange={this.handleTimeChange}
          onStartTimer={this.startTimer}
          onPauseTimer={this.pauseTimer}
          onResetTimer={this.resetTimer}
          paused={this.state.paused}
        />
      <TimeDisplay time={this.state.timeLeft}/>
      </div>
    );
  }
}

export default AppContainer;
