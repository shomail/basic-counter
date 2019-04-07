import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    counter: 0
  }

  render() {
    const {counter} = this.state;
    return (
      <section className="Counter">
        <h1>Count: {counter}</h1>
        <button onClick={() => this.setState({counter: counter + 1})} className="full-width">Increment</button>
        <button onClick={() => this.setState({counter: counter - 1})} className="full-width">Decrement</button>
        <button onClick={() => this.setState({counter: 0})} className="full-width">Reset</button>
      </section>
    );
  }
}
