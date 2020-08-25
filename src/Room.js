import React, { useState } from 'react';
import './App.css';
import './Room.css';
function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(23);
  return (
    <div className={"room " + (isLit?"lit":"dark") }>
       Lit = {isLit? "lit" : "dark"}<br/>
       age = {age}
      <button onClick={() => setLit(!isLit)}>
          Toggle Light</button>
      <button onClick={ () => {
                    setAge(++age)
      }}>Increase Age</button>
      <br/>
      
    </div>
  );
}

export default Room;
