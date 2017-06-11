import React, { Component } from 'react';

class TestOutcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }
  render() {
    return (
      <div className="well testOutcome">
        {this.props.name} - {this.props.outcome.toString()}
      </div>
    );
  }
}

export default TestOutcome;
