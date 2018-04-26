import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // Definition of state
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }



  // Change name based value in input
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Easy way to create a new object
    // Person to be delated
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // Set current input value into person name
    person.name = event.target.value;

    // Pull elements out and copy them into a new array
    // The reason why I did it is because I didn't want to work directly with original array in state -> IMMUTABLE STATE
    // Spread operator allows to us create a copy of the original array easily
    const persons = [...this.state.persons];
    // Change of a new array
    persons[personIndex] = person;

    // Update of state which trigger render method
    this.setState( {persons: persons} );
  }



  // Handler for click action on paragraph
  // DELETE action
  deletePersonHandler = (personIndex) => {

    // Pull elements out and copy them into a new array
    // The reason why I did it is because I didn't want to work directly with original array in state -> IMMUTABLE STATE
    // Spread operator allows to us create a copy of the original array easily
    const persons = [...this.state.persons];

    // The splice() method adds/removes items to/from an array, and returns the removed item(s).
    // first argument says which item of array should be considered
    // Second argument says how many items should be removed
    persons.splice(personIndex, 1);

    // Update of state and trigger render method because state was changed
    this.setState({persons: persons});
  }



  // Handler for show and hidden cards with persons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // Update state and trigger render method
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    // The way to handle button with swtiching (display/show) logic
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


// NOTEs:

// click={() => this.deletePersonHandler(index)}
// The way to add parameter into event handler

// (event) => this.nameChangedHandler(event, person.id)
// The way to pass parameters (person.id and event object)