function Keypad({handleClick,handleClear,handleResult}){
    return(
        <>
            <div className="row">
                <button className="digit" onClick={()=>{handleClick("7")}}>7</button>
                <button className="digit" onClick={()=>{handleClick("8")}}>8</button>
                <button className="digit" onClick={()=>{handleClick("9")}}>9</button>
                <button className="operation" onClick={()=>{handleClick("+")}}>+</button>
            </div>
            <div className="row">
                <button className="digit" onClick={()=>{handleClick("4")}}>4</button>
                <button className="digit" onClick={()=>{handleClick("5")}}>5</button>
                <button className="digit" onClick={()=>{handleClick("6")}}>6</button>
                <button className="operation" onClick={()=>{handleClick("-")}}>-</button>
            </div>
            <div className="row">
                <button className="digit" onClick={()=>{handleClick("1")}}>1</button>
                <button className="digit" onClick={()=>{handleClick("2")}}>2</button>
                <button className="digit" onClick={()=>{handleClick("3")}}>3</button>
                <button className="operation" onClick={()=>{handleClick("*")}}>*</button>
            </div>
            <div className="row">
                <button className="digit" onClick={()=>{handleClick("0")}}>0</button>
                <button className="result" onClick={()=>{handleResult()}}>=</button>
                <button className="clear" onClick={()=>{handleClear()}}>C</button>
                <button className="operation" onClick={()=>{handleClick("/")}}>/</button>
            </div>
        </>
    )
}

export default Keypad;