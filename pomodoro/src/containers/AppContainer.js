import React, {Component} from 'react';
import {Header} from '../components/Header';

const MINUTE = 1000 * 60;
const SECOND = 1000;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLength: 0,
      completed: 0,
      remainingTime: 0
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
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
  render() {
    return (
      <div>
        <Header
          timerLength={this.state.timerLength}
          onTimeChange={this.handleTimeChange}
        />
      </div>
    );
  }
}

export default AppContainer;
