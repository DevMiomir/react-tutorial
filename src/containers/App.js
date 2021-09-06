import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Box from '../components/Box/Box';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {  id: '12', name: 'Max', age: 28},
      {  id: '123', name: 'Mika', age: 34},
      {  id: '1', name: 'Pera', age: 30}
    ],
     otherState: 'some other value',
     showPersons: false,
     showBox: true,
     changeCounter: 0,
     authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
  }


  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
 
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DO NOT DO THIS!!! this.state.persons[0].name = 'Mario';
    this.setState( {
      persons:  [
      {name: 'Pique', age: '28'},
      {name: 'Mika', age: 34},
      {name: 'Pera', age: 33}
    ]
  })
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // const person = Object.assign({}, this.state.persons[personIndex])

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  };

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };
 
  render () {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
        />;
      }
    return ( 
        <div classes={classes.App}>
          <button onClick={() => {
            this.setState({ showBox: false });
          }}>Remove Box</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
            }}>
          {this.state.showBox ? (
            <Box 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.personsLenght} 
              clicked={this.togglePersonsHandler}
              />
          ) : null}
              {persons}
          </AuthContext.Provider>    
        </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m react App!!!'));
    }
}

export default withClass(App, classes.App);
