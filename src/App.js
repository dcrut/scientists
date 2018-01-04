import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList'
import PersonEdit from './components/PersonEdit'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        editing: null,
        people: [
          { firstName: 'Alan', lastName: 'Turing' },
          { firstName: 'Alanzo', lastName: 'Church' },
          { firstName: 'Grace', lastName: 'Hopper' }
        ]
      }
  }

  onDone = () => {
    this.state.editing = null;
    this.setState(this.state);
  }

  onEdit = (person) => {
    this.state.editing = person;
    this.setState(this.state);
  }

  childComponent = () => {
    return this.state.editing
      ? <PersonEdit person={this.state.editing} onDone={this.onDone} />
      : <PersonList people={this.state.people} onEdit={this.onEdit}/>
  }

  render() {
    return (
      <div className="App">
        { this.childComponent() }
      </div>
    );
  }
}
