import React from 'react';
import classes from './Box.css'


const box = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return(
        <div className={classes.Box}>
            <h1>Person Manager</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default box;