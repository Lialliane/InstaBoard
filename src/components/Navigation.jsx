import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active1" : "")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active2" : "")}>
        About
      </NavLink>
      <NavLink to="/team" className={({ isActive }) => (isActive ? "active3" : "")}>
        Team
      </NavLink>
    </nav>
  );
}
