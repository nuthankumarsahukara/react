import {createStore} from 'redux';
const initialState={
    todos : [],
    nextId : 1
}
function todoReducer(state=initialState,action){
    switch(action.type){        
        case "add_todo" :
            const newTodo = {id:state.nextId,
                title:action.payload.title}
            return {...state,todos:[...state.todos,newTodo],
                nextId:state.nextId+1
            }
        case "edit_todo" :
            return {...state,todos:state.todos.map(
                (todo)=>todo.id===action.payload.id ?
                {...todo,title:action.payload.title} : todo
            )};
        case "delete_todo" :
            return {...state,todos:state.todos.filter(
                (todo)=>todo.id!==action.payload)};
        default :
            return state;
    }

}
const store = createStore(todoReducer);

export default store;