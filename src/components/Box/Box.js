import React, { useEffect } from 'react';
import classes from './Box.css'


const box = (props) => {
    useEffect(() => {
      console.log('[Box.js] useEffect');
      return () => {
        console.log('[Box.js] clean up working in progress in useEffect');
      }
    }, []);

    useEffect(() => {
      console.log('[Box.js] 2nd useEffect');
      return () => {
        console.log('[Box.js] cleanup work in useEffect');
      };
    });
    
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return(
        <div className={classes.Box}>
            <h1>React Person Manager</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default React.memo(box);