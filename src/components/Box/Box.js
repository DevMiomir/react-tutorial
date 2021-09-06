import React, { useEffect, useRef, useContext } from 'react';
import classes from './Box.css'
import AuthContext from '../../context/auth-context';


const box = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  

  useEffect(() => {
    console.log('[Box.js] useEffect');
    toggleBtnRef.current.click();
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
          <button ref={toggleBtnRef} className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
          <button onClick={authContext.login}>Log in</button>
      </div>
  )
};

export default React.memo(box);