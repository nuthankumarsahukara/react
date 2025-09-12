import { useState } from "react";

function Vdom(){
    let [count,Updatecounter] =useState(0);
    let items=[1,2,3,4,5,6,7,8,9,10];
    return(
        <>
            <h1>Counter :{count}</h1>
            <button onClick={()=>{Updatecounter(count++)}}>Update</button>
            <ul>
                {
                    items.map((item)=>
                            <li>item {item}</li>
                    )
                }
            </ul>
        </>
    )
}

export default Vdom;