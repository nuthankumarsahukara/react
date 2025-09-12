import { useState } from 'react';
import './App.css';
function App(){
  let[todoInput,todoInputUpdate]=useState("");  
  let[todoList,todoListUpdate]=useState([]);
  let[nextid,setnextid]=useState(1);
  function addTask(){
    if(todoInput === ""){
      alert("please add the task");
    }
    else{
    let newTodos=[
        ...todoList,
        {
          id:nextid,
          task:todoInput
        }        
    ]
    todoListUpdate(newTodos);
    todoInputUpdate("");
    setnextid(nextid+1);
  }
  }
  function deleteTask(id){
      let filteredTodos=todoList.filter(
        (todo)=>{
            return todo.id !== id;
        }
      )
      todoListUpdate(filteredTodos);
  }
return(
  <div className="container mt-5 w-50">
    <h1 className="text-center">Todolist</h1>
    <div className="input-group">
      <input className="form-control" type="text" 
      onChange={(e)=>todoInputUpdate(e.target.value)}
      value={todoInput}/>
      <button className="btn btn-success" onClick={()=>{addTask()}}>Add</button>
    </div>
      <ul className="list-group mt-3">
        {
        todoList.map(
          (todo)=>{
            return(
              <li key={todo.id} className="list-group-item">
              <p>{todo.task}</p>
              <button className="btn" onClick={()=>{deleteTask(todo.id)}}>❌</button>
            </li>
            )
          }
        )
      }
      </ul>
  </div>
)
}

export default App;