import {useState} from 'react';
import Practise1 from './Practise1';
function Practise(){
    let [Task,UpdateTask]=useState(['task1','task2']);
    let addNew = (task) =>{
        UpdateTask([...Task,task]);
    }
    return(
        <>
            <Practise1 add={addNew}/>
            <ul>
                {
                    Task.map(
                        (t)=><li>{t}</li>
                    )
                }
            </ul>
        </>
    )
}

export default Practise;