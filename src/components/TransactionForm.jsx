import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || amount === "") {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      title,
      amount: Number(amount),
      type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;