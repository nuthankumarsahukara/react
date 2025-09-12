import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {deposit,withdraw,name_action,mobile_action} from './action'
function App(){
    const data= useSelector((state)=>{return state;});
    console.log(data);

    const dispatch = useDispatch();

    const[bal,setBal]=useState('');
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const [transactionId,setTransactionId]=useState(1);

    const handleWithDraw = () => {
        dispatch(withdraw(Number(bal)));
        setTransactionId(transactionId+1);
        dispatch({type:"Add",payload :{
            id:transactionId,amount:bal,date:new Date(),type:"Debit"
        }})
        setBal('');
    }
    const handleDeposit = () => {
        dispatch(deposit(Number(bal)));
        setTransactionId(transactionId+1);
        dispatch({type:"Add",payload :{
            id:transactionId,amount:bal,date:new Date(),type:"Credit"
        }})
        setBal('');
    }
    const handleName = () => {
        dispatch(name_action(name));
        setName('');
    }
    const handleMobile = () => {
        dispatch(mobile_action(Number(phone)));
        setPhone('');
    }
    const handleReset = () =>{
        dispatch({type:'reset'});
    }

    return(
        <>
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>🏦 Bank Account</h1>
            <h2>Balance: ₹{data.account.balance}</h2>
            <h2>Full Name: {data.account.fullName}</h2>
            <h2>Mobile: {data.account.phoneNumber}</h2>

            <div style={{ marginTop: "20px" }}>
                <input
                type="number"
                placeholder="Enter Amount"
                value={bal}
                onChange={(e) => setBal(e.target.value)}
                />&nbsp;
                <button onClick={handleDeposit}>Deposit</button>&nbsp;
                <button onClick={handleWithDraw}>Withdraw</button>
            </div>
            <div style={{ marginTop: "20px" }}>
                <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                /> &nbsp;
                <button onClick={handleName}>Update Name</button>
            </div>

            <div style={{ marginTop: "20px" }}>
                <input
                type="text"
                placeholder="Enter Mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                /> &nbsp;
                <button onClick={handleMobile}>Update Mobile</button>
            </div>
            <button onClick={handleReset}>Reset</button>
            </div>
            <table border={"5px"} align={"center"} width={"75%"} rules={"all"}>
                <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody align="center">
                        {
                            data.transaction.map((tr,index)=>(
                                <tr key={tr.id}>
                                    <td>{tr.id}</td>
                                    <td>{tr.date.toString()}</td>
                                    <td>{tr.type}</td>
                                    <td>{tr.amount}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}

export default App;