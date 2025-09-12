function Keyword({handleClick,handleClear,calculator}){
return(
    <div>
        <div className="row">   
            <button className="digit" 
            onClick={()=>{handleClick("7")}}>7</button>
            <button className="digit"
            onClick={()=>{handleClick("8")}}>8</button>
            <button className="digit"
            onClick={()=>{handleClick("9")}}>9</button>
            <button className="operator"
            onClick={()=>{handleClick("/")}}>/</button>
        </div>
        <div className="row">   
            <button className="digit"
            onClick={()=>{handleClick("4")}}>4</button>
            <button className="digit"
            onClick={()=>{handleClick("5")}}>5</button>
            <button className="digit"
            onClick={()=>{handleClick("6")}}>6</button>
            <button className="operator"
            onClick={()=>{handleClick("*")}}>*</button>
        </div>
        <div className="row">   
            <button className="digit"
            onClick={()=>{handleClick("1")}}>1</button>
            <button className="digit"
            onClick={()=>{handleClick("2")}}>2</button>
            <button className="digit"
            onClick={()=>{handleClick("3")}}>3</button>
            <button className="operator"
            onClick={()=>{handleClick("-")}}>-</button>
        </div>
        <div className="row">   
            <button className="digit" 
            onClick={()=>{handleClick("0")}}>0</button>
            <button className="fun-key" 
            onClick={()=>{calculator()}}>=</button>
            <button className="fun-key"
            onClick={()=>{handleClear()}}>C</button>
            <button className="operator"
            onClick={()=>{handleClick("+")}}>+</button>
        </div>
    </div>
    )
}

export default Keyword;