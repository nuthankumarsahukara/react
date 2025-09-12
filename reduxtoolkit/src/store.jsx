import {configureStore, createSlice} from '@reduxjs/toolkit';

let data={
    balance : 0,
    fullName : '',
    mobile : null
}

const useSlice=createSlice({
    name : 'user',
    initialState : data,
    reducers :{
        updateMobile : (state,action) => {
            state.mobile=action.payload;
        },
        updateName : (state,action) => {
            state.fullName=action.payload;
        },
        withdraw : (state,action) => {
            //state.balance =state.balance-action.payload;
            state.balance -= action.payload;
        },
        deposit : (state,action) => {
            //state.balance =state.balance+action.payload;
            state.balance += +action.payload;
        }
    }
});

const transactionSlice=createSlice({
    name :'transaction',
    initialState :[],
    reducers:{
        addTransaction : (state,action)=>{
            state.push(action.payload);
        },
    },
})

export const {addTransaction} =transactionSlice.actions;
export const {updateMobile,updateName,withdraw,deposit} = useSlice.actions;

const store=configureStore({
    reducer :{
        user:useSlice.reducer,
        transaction:transactionSlice.reducer,
    }
})

export default store;