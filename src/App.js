import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
