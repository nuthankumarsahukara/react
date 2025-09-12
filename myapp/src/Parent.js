import { useState } from "react";
import ChildP from "./ChildP";

function Parent(){
    let [task,setTask]=useState(['task1','task2']);
    let add = (data) =>{
        setTask([...task,data])
    }
    return(
        <>
            <ChildP data={add}/>
            <ul>
                {
                task.map(
                    (t)=><li>{t}</li>
                )
                }
            </ul>
        </>        
    )
}
export default Parent;