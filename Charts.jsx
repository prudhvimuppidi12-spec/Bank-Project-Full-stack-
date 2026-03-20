import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

// ✅ REGISTER ALL REQUIRED
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Charts() {
  const data = {
    labels: ["Deposit", "Withdraw", "Transfer"],
    datasets: [
      {
        label: "Transactions",
        data: [500, 200, 300],
        backgroundColor: ["#28a745", "#dc3545", "#ffc107"]
      }
    ]
  };

  return <Bar data={data} />;
}

export default Charts;