function Settings({ setTransactions }) {
  const clearTransactions = () => {
    if (window.confirm("Delete all transactions?")) {
      localStorage.removeItem("transactions");
      setTransactions([]);
    }
  };

  return (
    <div className="content">
      <h1>Settings</h1>

      <div className="settings-card">
        <h3>Application</h3>

        <button
          className="danger-btn"
          onClick={clearTransactions}
        >
          🗑 Clear All Transactions
        </button>

        <hr />

        <p>
          <strong>Project:</strong> Expense Tracker
        </p>

        <p>
          <strong>Framework:</strong> React
        </p>

        <p>
          <strong>Developer:</strong> Amrutha
        </p>

        <p>
          <strong>Version:</strong> 1.0
        </p>
      </div>
    </div>
  );
}

export default Settings;