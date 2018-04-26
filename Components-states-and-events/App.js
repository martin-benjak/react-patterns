// We must import React in this way (named export), because we need to use state
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


  // Definition of state (initial values)
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  // Function for handling change of name
  switchNameHandler = (newName) => {

    // setState metohod allow us to change state
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  // Function for handling change of name based on input value
  nameChangedHandler = (event) => {

    // setState metohod allow us to change state
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        // onClick is React attribute allowing us to listen click event. Value of this attribute is function
        // Alternatively I can write this {this.switchNameHandler.bind(this, 'Maximilian!!')}
        // If I don't want to pass argument, it is enought to use {this.switchNameHandler}
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>

        // props (name and age) get values from state
        // click and changed props receive functions they handle events (onChange and onClick in Person component)
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
