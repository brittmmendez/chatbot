import React, { Component } from 'react';

import './App.css';
import Chatbot from './components/chatbot.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatbot />
      </div>
    );
  }
}

export default App;
