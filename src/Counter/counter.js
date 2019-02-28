import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clics: 10
    }
    this.incrementar = this.incrementar.bind(this);
  }
  render() { 
    return (
      <div>
        <p>Has hecho {this.state.clics} clics</p>
        <button onClick={this.incrementar}>+1</button>
      </div>
    );
  }

  incrementar() {
    this.setState({
      clics: this.state.clics + 1
    });
  }
}
 
export default Counter;