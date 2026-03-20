import { useState } from "react";
import axios from "axios";

function Transfer() {
  const [data, setData] = useState({ email: "", amount: "" });
  const user = JSON.parse(localStorage.getItem("user"));

  const sendMoney = async () => {
    await axios.post("http://localhost:5000/api/transactions/transfer", {
      senderId: user._id,
      receiverEmail: data.email,
      amount: Number(data.amount)
    });

    alert("Transfer Successful");
  };

  return (
    <div className="container mt-4">
      <h3>Transfer Money</h3>

      <input className="form-control my-2" placeholder="Receiver Email"
        onChange={(e)=>setData({...data,email:e.target.value})} />

      <input className="form-control my-2" placeholder="Amount"
        onChange={(e)=>setData({...data,amount:e.target.value})} />

      <button className="btn btn-primary" onClick={sendMoney}>
        Send
      </button>
    </div>
  );
}

export default Transfer;