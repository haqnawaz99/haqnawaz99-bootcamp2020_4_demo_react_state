import React, { useState } from 'react';
import './App.css';
import './Room.css';
function Room() {
    let [isOnOff, setOnOff] = useState(true);
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(23);
    let [temprature, setTemprature] = useState(22);
  return (
    <div className={"room " + (isLit?"lit":"dark") }>
       Lit = {isLit? "lit" : "dark"}
       <button onClick={() => setLit(!isLit)}>Toggle Light</button><br/>
       age = {age}<button onClick={ () => {setAge(++age)}}>Increase Age</button><br/>
       light is = {isOnOff? "On" : "Off"}
      <button onClick={() => setOnOff(true)}>Turn on Light</button>
      <button onClick={() => setOnOff(false)}>Turn off Light</button><br/>
      temprature = {temprature}
      <button onClick={ () => {setTemprature(++temprature)}}>Increase Temprature</button>
      <button onClick={ () => {setTemprature(--temprature)}}>Decrease Temprature</button>
      <br/>
      
      <br/><br/>
      
    </div>
  );
}

export default Room;
