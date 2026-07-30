import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaCog,
} from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo-icon">
          <FaMoneyBillWave />
        </div>

        <h2>Expense Tracker</h2>

        <p>Personal Finance</p>
      </div>

      <ul>
        <li>
          <NavLink to="/" end className="nav-link">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/transactions" className="nav-link">
            <FaWallet />
            <span>Transactions</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/statistics" className="nav-link">
            <FaChartPie />
            <span>Statistics</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="nav-link">
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <p>Version 1.0</p>
        <small>Made with ❤️ using React</small>
      </div>
    </div>
  );
}

export default Sidebar;