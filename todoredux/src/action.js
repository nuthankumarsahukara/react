export function addTodo(todo){
    return{type:"add_todo",payload : todo};
}

export function editTodo(todo){
    return{type:"edit_todo",payload : todo};
}

export function deleteTodo(id){
    return{type :"delete_todo",payload : id}
}