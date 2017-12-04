import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
  
    this.state = {
      filterString: "",
      stuff : ['food','games','work','sports']
    }
  }
  
  handleChange(filter){
    this.setState({filterString: filter})
  }
  
    render() {
      let stuffToDisplay = this.state.stuff.filter( (element, index) => {
        return element.includes( this.state.filterString );
      }).map( (element, index) => {
        return <h2 key={ index }>{ element }</h2>
      })
  
      return (
          <div>
          <input onChange={(e)=>this.handleChange(e.target.value)}/>
        {stuffToDisplay}
        </div>
      );
    }
  }

export default App;
