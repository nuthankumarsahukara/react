import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';

function App(){
  let[input,setInput]=useState("");
  
  let handleClick=(value)=>{
      setInput(input+value);
  }

  let handleClear=()=>{
    setInput("");
  }
  
  let resultCal = () =>{
    setInput(eval(input));
  }

  let handleClearSingle = () =>{
    setInput(input.slice(0,-1));
  }

  let handleSqrt=()=>{
      setInput(input*input);
  }

  return(
    <>
      <div className="container">
        <h1>Calculator With React JS</h1>
        <div className='box'>
          <input className='input' type="text" value={input} readOnly />
          <Keypad handleClear={handleClear} handleClick={handleClick} resultCal={resultCal} handleClearSingle={handleClearSingle} handleSqrt={handleSqrt}/>
        </div>
      </div>
    </>
  )
}

export default App;