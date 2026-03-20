import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Loans() {
  const [amount, setAmount] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const applyLoan = async () => {
    try {
      await axios.post("http://localhost:5000/api/loans/apply", {
        userId: user._id,
        amount: Number(amount)
      });

      toast.success("Loan Applied Successfully 💰");
      setAmount("");
    } catch {
      toast.error("Loan Failed ❌");
    }
  };

  return (
    <div>
      <h3>🏦 Apply Loan</h3>

      <input
        className="form-control my-2"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="btn btn-warning" onClick={applyLoan}>
        Apply Loan
      </button>
    </div>
  );
}

export default Loans;