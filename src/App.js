import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Panel1, Panel2, Panel3, Panel4} from './Panel.js'

class App extends Component {
 /* constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
      </div>
    );
  }
}

export default App;
