import { useState } from "react";

function Practise1(props){
    let[input,setInput]=useState("");
    return(
        <>
            <input type="text" value={input}
            onChange={
                (e)=>{setInput(e.target.value)}
                }/>
            <button onClick={()=>{props.add(input)}}>Add List</button>
        </>
    )
}

export default Practise1;