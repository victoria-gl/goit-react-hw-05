import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";
const styleBar = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const NavBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={styleBar}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styleBar}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default NavBar;
