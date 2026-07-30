import SummaryCard from "../components/SummaryCard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Dashboard({
  transactions,
  addTransaction,
  deleteTransaction,
}) {
  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;
  const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
  return (
    <div className="content">
      <div className="dashboard-header">
  <div>
    <h1>{greeting}, Amrutha 👋</h1>
    <p>Manage your finances with confidence.</p>
  </div>
</div>

      <div className="cards">
        <SummaryCard
  title="Balance"
  amount={balance}
  color="#4F46E5"
/>

<SummaryCard
  title="Income"
  amount={income}
  color="green"
/>

<SummaryCard
  title="Expense"
  amount={expense}
  color="red"
        />
      </div>

      <TransactionForm addTransaction={addTransaction} />

      <TransactionList
    transactions={transactions.slice(0,5)}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default Dashboard;