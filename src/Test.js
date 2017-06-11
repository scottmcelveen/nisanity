import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import TestOutcome from './TestOutcome';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      loading: false
    };
  }
  componentDidMount() {
    axios
      .get(this.props.url)
      .then(res => {
          this.setState({ success: res.data.success, loading: false });
      })
      .catch(res => {
          this.setState({ success: false, loading: false });
      });
  }
  render() {
    if(this.props.loading === true) {
      return (
        <Spinner show={true} />
      );
    }
    return (
        <TestOutcome name={this.props.name} outcome={this.state.success} />
    );
  }
}

export default Test;
