import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function Statistics({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const pieData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#22C55E", "#EF4444"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [income, expense],
        backgroundColor: ["#22C55E", "#EF4444"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="content">
      <h1>Statistics</h1>

      <div className="cards">
        <div className="card">
          <h4>Balance</h4>
          <h2>₹{balance}</h2>
        </div>

        <div className="card">
          <h4>Income</h4>
          <h2 style={{ color: "green" }}>₹{income}</h2>
        </div>

        <div className="card">
          <h4>Expense</h4>
          <h2 style={{ color: "red" }}>₹{expense}</h2>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-card">
          <h3>Income vs Expense</h3>
          <Pie data={pieData} />
        </div>

        <div className="chart-card">
          <h3>Comparison</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;