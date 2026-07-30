import {
  FaBell,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/transactions": "Transactions",
    "/statistics": "Statistics",
    "/settings": "Settings",
  };

  const today = new Date().toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

  return (
    <div className="navbar">
      <div className="nav-left">
        <h2>{titles[location.pathname]}</h2>
        <p>{today}</p>
      </div>

      <div className="nav-icons">
        <FaBell />

        {darkMode ? (
          <FaSun onClick={() => setDarkMode(false)} />
        ) : (
          <FaMoon onClick={() => setDarkMode(true)} />
        )}

        <div className="profile">
          <FaUserCircle />
          <span>Amrutha</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;