import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
  state = {
    counter: 0
  }

  handleIncrement = () => {
    this.setState({counter: this.state.counter + 1})
  }

  handleDecrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  handleReset = () => {
    this.setState({counter: 0})
  }

  render() {
    const {counter} = this.state;
    return (
      <Counter
        count={counter}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
      />
    );
  }
}
