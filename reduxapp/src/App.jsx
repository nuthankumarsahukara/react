import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  handleDeposit,
  handleWithdraw,
  handleUpdateName,
  handleUpdateMobile,
} from "./Action";
function App() {
  const data= useSelector((state)=>{return state;});
  console.log(data);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [transactionId, setTransactionId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏦 Bank Account</h1>
      <h2>Balance: ₹{data.account.balance}</h2>
      <h2>Full Name: {data.account.fullName}</h2>
      <h2>Mobile: {data.account.mobile}</h2>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        &nbsp;
        <button
          onClick={() => {
            dispatch(handleDeposit(Number(amount)));
            setTransactionId(transactionId + 1);
            dispatch({
              type: "Add",
              payload: {
                id: transactionId,
                amount: amount,
                date: new Date(),
                type: "Credit",
              },
            });
            setAmount("");
          }}
        >
          Deposit
        </button>
        &nbsp;
        <button
          onClick={() => {
            dispatch(handleWithdraw(Number(amount)));
            setTransactionId(transactionId + 1);
            dispatch({
              type: "Add",
              payload: {
                id: transactionId,
                amount: amount,
                date: new Date(),
                type: "Debit",
              },
            });
            setAmount("");
          }}
        >
          Withdraw
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        &nbsp;
        <button
          onClick={() => {
            dispatch(handleUpdateName(name));
            setTransactionId(transactionId + 1);
            dispatch({
              type: "Add",
              payload: {
                id: transactionId,
                amount: "--------",
                date: new Date(),
                type: "Name Updated",
              },
            });
            setName("");
          }}
        >
          Update Name
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Mobile"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        &nbsp;
        <button
          onClick={() => {
            dispatch(handleUpdateMobile(phone));
            setTransactionId(transactionId + 1);
            dispatch({
              type: "Add",
              payload: {
                id: transactionId,
                amount: "--------",
                date: new Date(),
                type: "Updated Mobile Number",
              },
            });
            setPhone("");
          }}
        >
          Update Mobile
        </button>
      </div>
      <br/><br/>
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
          {data.transaction.map((tr, index) => (
            <tr key={tr.id}>
              <td>{tr.id}</td>
              <td>{tr.date.toString()}</td>
              <td>{tr.type}</td>
              <td>{tr.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
