import {
  FaWallet,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

function SummaryCard({ title, amount, color }) {
  let icon;

  if (title === "Balance") {
    icon = <FaWallet />;
  } else if (title === "Income") {
    icon = <FaArrowTrendUp />;
  } else {
    icon = <FaArrowTrendDown />;
  }

  return (
    <div
  className={`card ${
    title === "Balance"
      ? "balance-card"
      : title === "Income"
      ? "income-card"
      : "expense-card"
  }`}
>
      <div
        className="card-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="card-content">
        <h4>{title}</h4>

        <h2 style={{ color }}>
            <h2 style={{ color }}>
  ₹{amount.toLocaleString("en-IN")}
</h2>
        </h2>

        <p>
          {title === "Balance"
            ? "Available Balance"
            : title === "Income"
            ? "Money Received"
            : "Money Spent"}
        </p>
      </div>
    </div>
  );
}

export default SummaryCard;