import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./action";
import TodoList from "./TodoList";

function App(){
  const dispatch = useDispatch();
  const [todoTitle,setTodoTitle]=useState('');
  const handleTodo = () =>{
    if (todoTitle.trim()) {
          const newTodo = {
            title: todoTitle,
          };
          dispatch(addTodo(newTodo));
          setTodoTitle("");
        }
  }
  return(
    <>
      <div className="container w-50 mt-5">
        <h1 className="text-center text-info">Todo List in Redux</h1>
        <div className="input-group">
          <input type="text"
          className="form-control"
          value={todoTitle}
          onChange={(e)=>setTodoTitle(e.target.value)}
          />
          <button className="btn btn-primary"
          onClick={()=>{handleTodo()}}
          >Add</button>
        </div>  
        <TodoList/>      
      </div>
    </>
  )
}

export default App;