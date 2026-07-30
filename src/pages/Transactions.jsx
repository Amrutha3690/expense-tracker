import { useState } from "react";
import TransactionList from "../components/TransactionList";

function Transactions({ transactions, deleteTransaction }) {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="content">
      <h1>All Transactions</h1>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search transaction..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </div>

      <TransactionList
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default Transactions;