import React, {Component} from 'react';

export default class WithCount extends Component {
  state = {counter: 0}

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
    return (
      <div className="WithCount">
        {
          this.props.render(
            this.state.counter,
            this.handleIncrement,
            this.handleDecrement,
            this.handleReset,
          )
        }
      </div>
    )
  }
}