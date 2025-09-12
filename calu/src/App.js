import { useState } from 'react';
import './App.css'
import Keypad from './Keypad';

function App(){
  const[input,setInput]=useState("");

  const handleClick = (value)=>{
    setInput(input+value)
  }

  const handleClear = () => {
    setInput("");
  }

  const handleResult = () =>{
    setInput(eval(input))
  }

  return(
    <>
        <h1>Calculator With React JS</h1>
        <div className='box'>
          <input className='input' value={input} type="text" readOnly/>
          <Keypad handleClick={handleClick} handleClear={handleClear} handleResult={handleResult}/>
        </div>
    </>
  )
}

export default App;