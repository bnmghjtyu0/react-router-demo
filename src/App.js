import { Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home/index'
import { Sandwiches } from './pages/sandwiches/index'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/sandwiches" component={Sandwiches} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/" className="App-link">Home</Link>
          <Link to="/sandwiches" className="App-link">sandwiches</Link>

        </header>
      </div>
    );
  }
}

export default App;
