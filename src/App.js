import './App.css';

import React, { Component } from 'react';

import CardItem from './components/card-item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardItem title="Card Item Title" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
