import React, { Component } from 'react';

import Counter from './Counter';
// import CounterContainer from './CounterContainer';
import WithCount from './WithCount';

export default class Application extends Component {
  render() {
    return (
      <main className="Application">
        {/* <CounterContainer /> */}
        <WithCount
          render={
            (count, onIncrement, onDecrement, onReset) => (
              <Counter
                count={count}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onReset={onReset}
              />
            )
          }
        />
      </main>
    );
  }
}
