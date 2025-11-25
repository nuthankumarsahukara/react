import { useReducer } from "react";

function App(){
    function count(state,action){
        
        switch(action.type){
        case 'inc' :
            return state+1;
        case 'dec' :
            return state-1;
        case 'reset' :
            return 0;
        default :
            return state;
        }
    }
    let[counter,dispatch]=useReducer(count,0);
    return(
        <>
            <h1>UseReducer Example</h1>
            <button onClick={()=>dispatch({type:'dec'})}>Minus</button>
            &nbsp;&nbsp;&nbsp;
            <b>Counter : {counter}</b>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch({type:'inc'})}>Plus</button>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
            <button onClick={()=>dispatch({type: 'stop'})}>Stop</button>
        </>
    )
}

export default App;