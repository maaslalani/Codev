Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non totam minima odit, quos odio maxime dignissimos quo quam cupiditate rem esse, nemo, vero, nostrum reiciendis voluptate sit officiis ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est non totam minima odit, quos odio maxime dignissimos quo quam cupiditate rem esse, nemo, vero, nostrum reiciendis voluptate sit officiis ut.

import React, { Component } from 'react';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import AddOption from './AddOption.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Indecision App",
      sub: "Put your life in the hands of a computer.",
      options: ["One", "Two", "Three"]
  }
  this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  this.handlePickOptions = this.handlePickOptions.bind(this);
}

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePickOptions = () => {
    const rand = Math.floor( Math.random() * this.state.options.length );
    const option = this.state.options[rand];
    alert(option);
  }

  render(){
    return (
      <div>   
        <Header title = {this.state.title} sub = {this.state.sub} />
        <Action 
        hasOptions = {this.state.options.length > 0} 
        handlePickOptions = {this.handlePickOptions}
        />
        <Options 
          options ={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption />
      </div>
  );
}
}

export default App;
