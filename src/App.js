import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm user={'petehunt'} includeMember={false}></SearchForm>
        <Results results={results}></Results>
      </div>
    );
  }
}

export default App;
