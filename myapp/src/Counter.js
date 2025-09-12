import { useState } from "react";

function Counter(){
    let [Count,UpdateCounter]=useState(0);
    let Stock=10;
    return(
        
        <div style={{display:"flex",justifyContent:"center"}}>
            <button disabled={Count===0} onClick={()=>{
                if(Count>0)
                UpdateCounter(Count--);
            }}>-</button>
            &nbsp;&nbsp; 
            <p>{Count}</p>
            &nbsp;&nbsp;
            <button disabled={Count===10} onClick={()=>{
                if(Count<=Stock)
                UpdateCounter(Count++);
            }}>+</button>
        </div>
    );
}

export default Counter;