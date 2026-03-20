import { useState } from "react";
import axios from "axios";
import Charts from "../components/Charts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userData);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const updateUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const deposit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/account/deposit", {
        userId: user._id,
        amount: Number(amount)
      });

      updateUser(res.data);
      toast.success("Deposit Successful ✅");
      setAmount("");
    } catch {
      toast.error("Deposit Failed ❌");
    }
  };

  const withdraw = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/account/withdraw", {
        userId: user._id,
        amount: Number(amount)
      });

      updateUser(res.data);
      toast.success("Withdraw Successful 💸");
      setAmount("");
    } catch {
      toast.error("Withdraw Failed ❌");
    }
  };

  return (
    <div>

      {/* HERO */}
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b5')",
          backgroundSize: "cover",
          padding: "60px",
          borderRadius: "10px",
          color: "white"
        }}
      >
        <h1>Smart Banking</h1>
        <p>Manage your money, transfers & loans easily</p>
      </div>

      {/* BALANCE */}
      <div
        style={{
        background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
        }}
      >
      💰 Balance: ₹{user.balance}
    </div>

      {/* DEPOSIT / WITHDRAW */}
      <div className="card p-3 mt-3">
        <input
          className="form-control mb-2"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="btn btn-success me-2" onClick={deposit}>
          <i className="fas fa-arrow-down me-1"></i> Deposit
        </button>

        <button className="btn btn-danger" onClick={withdraw}>
          <i className="fas fa-arrow-up me-1"></i> Withdraw
        </button>
      </div>

      {/* SERVICES (UPDATED CLICKABLE 🔥) */}
      <div className="row mt-4">

        <div className="col-md-3">
          <div
            className="card p-3 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/transfer")}
          >
            <i className="fas fa-exchange-alt fa-2x text-primary mb-2"></i>
            Transfer
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card p-3 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 200, behavior: "smooth" })}
          >
            <i className="fas fa-money-bill fa-2x text-success mb-2"></i>
            Deposit
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card p-3 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/loans")}
          >
            <i className="fas fa-university fa-2x text-warning mb-2"></i>
            Loans
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card p-3 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => toast.info("💳 Card feature coming soon")}
          >
            <i className="fas fa-credit-card fa-2x text-danger mb-2"></i>
            Cards
          </div>
        </div>

      </div>

      {/* CHART */}
      <div className="card p-3 mt-4 bg-white">
        <h5 className="text-dark">Transaction Overview</h5>
        <Charts />
      </div>

      {/* OFFERS */}
      <div className="card mt-4 p-3">
        <h5>🔥 Offers</h5>
        <ul>
          <li>10% cashback on online payments</li>
          <li>0% interest loan for 3 months</li>
          <li>Free debit card for new users</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;