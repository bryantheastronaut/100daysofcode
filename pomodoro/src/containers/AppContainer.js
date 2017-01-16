import React, {Component} from 'react';
import {Header} from '../components/Header';
import {TimeDisplay} from '../components/TimeDisplay';

const MINUTE = 1000 * 60;
const SECOND = 1000;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLength: 0,
      completed: 0,
      timeLeft: 0
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
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
    this.setState({timeLeft: this.state.timerLength});
    process.nextTick(() => {
      this.timerId = setInterval(() => {
        this.tick()
      }, SECOND);
    });
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
        />
      <TimeDisplay time={this.state.timeLeft} btn={this.startTimer} />
      </div>
    );
  }
}

export default AppContainer;
