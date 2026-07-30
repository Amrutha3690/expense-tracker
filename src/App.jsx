import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";

import "./styles/layout.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [transactions, setTransactions] = useState(() => {
  const savedTransactions = localStorage.getItem("transactions");

  return savedTransactions
    ? JSON.parse(savedTransactions)
    : [
        {
          title: "Salary",
          type: "Income",
          amount: 40000,
        },
        {
          title: "Food",
          type: "Expense",
          amount: 350,
        },
      ];
});

useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}, [transactions]);

const addTransaction = (newTransaction) => {
  setTransactions((prev) => [newTransaction, ...prev]);
};

const deleteTransaction = (index) => {
  setTransactions((prev) =>
    prev.filter((_, i) => i !== index)
  );
};
  return (
    <div className={darkMode ? "container dark" : "container"}>
      <Sidebar />

      <div className="main-content">
        <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

        <Routes>
          <Route
  path="/"
  element={
    <Dashboard
      transactions={transactions}
      addTransaction={addTransaction}
      deleteTransaction={deleteTransaction}
    />
  }
/>

          <Route
  path="/transactions"
  element={
    <Transactions
      transactions={transactions}
      deleteTransaction={deleteTransaction}
    />
  }
/>

          <Route
  path="/statistics"
  element={
    <Statistics
      transactions={transactions}
    />
  }
/>

          <Route
    path="/settings"
    element={
        <Settings
            setTransactions={setTransactions}
        />
    }
/>
        </Routes>
      </div>
    </div>
  );
}

export default App;