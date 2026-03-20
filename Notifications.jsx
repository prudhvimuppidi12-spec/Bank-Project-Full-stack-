import { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [data, setData] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/notifications/${user._id}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>🔔 Notifications</h3>

      <ul className="list-group">
        {data.map((n, i) => (
          <li key={i} className="list-group-item">
            {n.message}
            <br />
            <small className="text-muted">
              {new Date(n.date).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;