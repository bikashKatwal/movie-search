import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        &nbsp;
        <span>{this.props.count}</span>
        &nbsp;
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
