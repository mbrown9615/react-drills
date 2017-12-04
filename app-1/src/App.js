import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
  
    this.state = {
      input: ''
    }
  }

  returnInput(value){
    this.setState({
      input: value
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <input onChange={(e)=>this.returnInput(e.target.value)}/>
      <h1>{this.state.input}</h1>
      </div>
    );
  }
}

export default App;
