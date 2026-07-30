import { FaTrash } from "react-icons/fa";
function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

       <tbody>
  {transactions.length === 0 ? (
    <tr>
      <td colSpan="4" className="empty-state">
        📄 <br />
        <strong>No Transactions Yet</strong>
        <br />
        Add your first transaction to get started.
      </td>
    </tr>
  ) : (
    transactions.map((transaction, index) => (
      <tr key={index}>
        <td>{transaction.title}</td>

        <td>{transaction.type}</td>

        <td
          style={{
            color: transaction.type === "Income" ? "green" : "red",
          }}
        >
          {transaction.type === "Income" ? "+" : "-"}₹
          {transaction.amount.toLocaleString("en-IN")}
        </td>

        <td>
          <button
            className="delete-btn"
            onClick={() => deleteTransaction(index)}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
      </table>
    </div>
  );
}

export default TransactionList;