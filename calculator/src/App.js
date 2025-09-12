import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';
function App(){
  let [input,setInput]=useState("");

  function handleClick(value){
    setInput(input+value);
  }

  function handleClear(){
    setInput("");
  }

  function resultCal(){
    setInput(eval(input));
  }

  return(
    <div className="container">
        <h1>Calculator With React JS</h1>
        <div className="box">
          <input className="output" type="text" value={input} readOnly/>
          <Keypad handleClick={handleClick} handleClear={handleClear} resultCal={resultCal}/>
        </div>
    </div>
  )
}

export default App;