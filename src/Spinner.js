import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    if(this.props.loading === false) {
        return null;
    }
    return (
        <div className="spinner"></div>
    );
  }
}

export default Spinner;
