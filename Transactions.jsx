import { useEffect, useState } from "react";
import axios from "axios";

function Transactions() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/transactions/${user._id}`
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>📄 Transactions</h3>

      {data.length === 0 ? (
        <div className="text-center mt-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            width="150"
          />
          <p>No transactions yet</p>
        </div>
      ) : (
        <table className="table table-dark table-hover mt-3">
          <thead>
            <tr>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.map((t, i) => (
              <tr key={i}>
                <td>
                  <i
                    className={`fas ${
                      t.type === "deposit"
                        ? "fa-arrow-down text-success"
                        : t.type === "withdraw"
                        ? "fa-arrow-up text-danger"
                        : "fa-exchange-alt text-warning"
                    }`}
                  ></i>{" "}
                  {t.type}
                </td>

                <td>{t.sender}</td>
                <td>{t.receiver}</td>
                <td>₹{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Transactions;