import { useEffect, useState } from "react";

function UseEffectEx(){
    let [count,setCount]=useState(0);
    let [timer,setTimer]=useState(0);
    useEffect(()=>{
        console.log("Inside useEffect");
    },[timer])    
    return(
        <>
            <h1>Count :{count}</h1>
            {console.log('Inside the component')}
            <button onClick={()=>{setCount(count+1)}}>
                Update count
            </button>
            <button onClick={()=>{setTimer(timer+1)}}>
                Update Timer
            </button>
        </>
    )
}

export default UseEffectEx;