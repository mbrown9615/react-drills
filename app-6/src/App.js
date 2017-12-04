import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {

constructor(){
  super();

  this.state = {
    input: '',
    list: []
  }
  this.handleAddTask = this.handleAddTask.bind( this );
}

handleInputChange(value){
  this.setState({
    input: value
  })
}

handleAddTask(value){
    this.setState({
      list: [...this.state.list, this.state.input ],
      input: ''
    })
}

  render() {

    let list = this.state.list.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })

    return (
      <div className="App">
        <header>My To-Do List</header>
        <input onChange={(e)=> this.handleInputChange(e.target.value)}/>
        <button onClick={this.handleAddTask}>Add</button>

        {list}
      </div>
    );
  }
}

export default App;
