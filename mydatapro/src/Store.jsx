import {applyMiddleware,createStore} from 'redux';
import {thunk} from 'redux-thunk';


const initialState={
    userData:{}
}

function useReducer(state=initialState,action){
    switch(action.type){
        case "add" :
            return{...state,userData:action.payload};
        default :
            return state;
    }
}

const Store=createStore(useReducer,applyMiddleware(thunk));

export default Store;