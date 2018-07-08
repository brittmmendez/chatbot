import React, { Component } from 'react';
import CB from './components/cb.js'
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to my ChatBot</h1>
          <h4>Created with the help of react-simple-chatbot</h4>
        </div>
        <div className="mainTheme">
          <CB />
        </div>

      </div>
    );
  }
}

export default App;
