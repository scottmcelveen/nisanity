import React, { Component } from 'react';
import Test from './Test';
import './App.css';
import axios from 'axios';

class TestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: []
    };
  }
  componentDidMount() {
      axios
        .get(`http://localhost:3000/data.json`)
        .then(res => {
            this.setState({ tests: res.data.tests });
      });
  }
  render() {
    return (
        <div className="container">
            <h2>NISanity testing</h2>
            <div className="testList">
            {this.state.tests.map(function(test, index){
                return <Test key={index} name={test.name} url={test.url} />;
            })}
            </div>
        </div>
    );
  }
}

export default TestList;
