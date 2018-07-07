import React, { Component } from 'react';
// import ChatBot from 'react-simple-chatbot';
import MainTheme from './components/theme.js'
import './App.css';

class App extends Component {

  render() {
    // const steps = [
    //   {
    //     id: '1',
    //     message: 'Hello World',
    //     end: true,
    //   },
    // ];
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to my ChatBot</h1>
          <h4>Created with the help of react-simple-chatbot</h4>
        </div>
        <div className="mainTheme">
          <MainTheme />
        </div>
      </div>
    );
  }
}

export default App;
