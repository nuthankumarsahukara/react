import { useState } from "react";

function ChildP(props){
    let [input,setInput]=useState("")
    return(
        <>
            <input type="text" value={input} 
            onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={() =>{props.data(input)}}>Add</button>
        </>
    )
}

export default ChildP;