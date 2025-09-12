import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMobile,updateName,withdraw,deposit,addTransaction } from "./store";
function App(){
  const {balance,fullName,mobile} = useSelector(state => state.user);
  const transactions=useSelector(state => state.transaction);
  const dispatch=useDispatch();
  
  const[amount,setAmount]=useState('');
  const[name ,setName]=useState('');
  const[phone,setPhone]=useState('');

  const handleDeposit = () =>{
      dispatch(deposit(Number(amount)));
      dispatch(addTransaction({
        id:Date.now(),
        amount,
        date :new Date().toLocaleString(),
        type :'Credit'
      }));
      setAmount('');
  }

  const handleWithdraw = () =>{
    dispatch(withdraw(Number(amount)));
    dispatch(addTransaction({
      id:Date.now(),
      amount,
      date :new Date().toLocaleString(),
      type :'Debit'
    }));
    setAmount('');
  }

  const handleUpdateName = () =>{
    dispatch(updateName(name));
    setName('');
  }

  const handleUpdateMobile = () =>{
      dispatch(updateMobile(phone));
      setPhone('');
  }

  return(
    <>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>🏦 Bank Account</h1>
        <h2>Balance: ₹{balance}</h2>
        <h2>Full Name: {fullName || 'Not Set'}</h2>
        <h2>Mobile: {mobile || 'Not Set'}</h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />&nbsp;
        <button onClick={handleDeposit}>Deposit</button>&nbsp;
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> &nbsp;
        <button onClick={handleUpdateName}>Update Name</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Mobile"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> &nbsp;
        <button onClick={handleUpdateMobile}>Update Mobile</button>
      </div>
      <hr/>
      <h1 align="center">Transaction List</h1>
      <table border={"1px"} rules="all" width={"75%"} align="center">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Amount</th>
            <th>Transaction Date</th>
            <th>Transaction Type</th>
          </tr>
        </thead>
        <tbody align="center">
          {transactions.map((tx)=>(
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.amount}</td>
              <td>{tx.date}</td>
              <td>{tx.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default App;