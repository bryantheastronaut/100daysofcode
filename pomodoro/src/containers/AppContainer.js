import React, {Component} from 'react';
import {Header} from '../components/Header';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLength: 0,
      completed: 0,
      remainingTime: 0
    };
  }
  render() {
    return (
      <div>
        <Header timerLength={this.state.timerLength}/>
      </div>
    );
  }
}

export default AppContainer;
