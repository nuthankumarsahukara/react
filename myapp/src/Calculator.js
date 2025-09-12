import { useState } from 'react';
import './cal.css';
import Keyword from './Keyword';
function Calculator(){
    let [input,setInput]=useState("");
    function handleClick(value){
        setInput(input+value);
    }
    function handleClear(){
        setInput("");
    }

    function calculator(){
        setInput(eval(input));
    }
    return(
        <div className='container'>
            <h1>Calculator With React JS</h1>
            <div className='calculator'>
                <input type="text" className="output" value={input} readOnly/>
                <Keyword handleClick={handleClick} handleClear={handleClear} calculator={calculator}/>
            </div>
        </div>
    )
}

export default Calculator;