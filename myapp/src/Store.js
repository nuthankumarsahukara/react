import { combineReducers, createStore } from "redux";

const initialState = {
    balance: 0,
    fullName: "",
    mobile: null,
};


function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case "mobileUpdate":
            return { ...state, mobile: action.payload };
        case "nameUpdate":
            return { ...state, fullName: action.payload };
        case "account/reset":
            return initialState;
        default:
            return state;
    }
}

function transactionReducer(state=[],action){
    switch(action.type){
        case "Add" :
            return[...state,{
                id:action.payload.id,
                amount:action.payload.amount,
                type:action.payload.type,
                date:action.payload.date}]
        default :
            return state;
    }
}
const rootReducer=combineReducers(
    {
        account:accountReducer,
        transaction:transactionReducer
    }
)
const store = createStore(rootReducer);

export default store;