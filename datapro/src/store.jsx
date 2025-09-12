import {createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

const initialState={
    userData:{}
}

function userReducer(state=initialState,action){
    switch(action.type){
        case "add" :
            return {...state,userData:action.payload};
        default :
            return state;   
    }
}

const Store=createStore(userReducer,applyMiddleware(thunk))


export default Store;