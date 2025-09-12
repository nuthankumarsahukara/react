import { useState ,useEffect} from "react";

function Component(){
    let [count,setCount]=useState(0);
    useEffect(() => {
        console.log("Component Mounted");    
        return () => {
            console.log("Component Unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Count Updated:", count);
    }, [count]);
    return(
        <>
            <h1>Count :{count}</h1>
            <button onClick={() =>{setCount(count+1)}}>Update Count</button>
        </>
    )
}
export default Component;