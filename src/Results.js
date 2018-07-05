import React, { Component } from 'react';
import './App.css';

class Results extends Component {
  render() {
    return (
      <ul className="results-list">
        {this.props.results.map(result => {
            return <ResultItem key={result.id} result={result}></ResultItem>;
            }.bind(this))
        }
      </ul>
    );
  }
}

export default Results;