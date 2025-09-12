import { useState } from 'react';
import './todo.css';
function Todolist(){
    let [todoInput,todoInputUpdate]=useState("");
    let [todoList,todoListUpdate]=useState([]);
    let [nextid,setnextid]=useState(1);
    function addNewTask(){
        if(todoInput === ""){
            alert("Please Enter the Task");
        }else{
            let newTodos=[
                ...todoList,
                {
                    id : nextid,
                    task : todoInput
                }
            ]
            todoListUpdate(newTodos);
            todoInputUpdate("");
            setnextid(nextid+1);
        }
    }
    function deleteTodo(id){
        let filteredTodos= todoList.filter(
            (todo)=>{
                return todo.id !== id
            }
        )
        todoListUpdate(filteredTodos)
    }
    return(
        <div className="container mt-5 w-50">
            <h1 className="text-center" style={{fontFamily:"comic sans MS"}}>Todo List</h1>
            <div className="input-group">
            <input className="form-control" onChange={(e)=>{
                todoInputUpdate(e.target.value);    
            }}type="text" value={todoInput}/>
            <button onClick={()=>{
                    addNewTask()
                }   
            }
            className="btn btn-success" style={{fontFamily:"comic sans MS"}}>Add</button>
            </div>
            <ul className="list-group mt-2">
            {
                todoList.map(
                    (todo)=>{
                        return(
                            <li key={todo.id} className="list-group-item">
                                <p>{todo.task}</p>
                                <button 
                                className="btn"
                                onClick={()=>{deleteTodo(todo.id)}}>❌</button>
                            </li>
                        )
                    }
                )
            }
            </ul>
        </div>
    )
}

export default Todolist;