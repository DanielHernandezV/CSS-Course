import "./movile-nav.styles.css";
import { Link } from "react-router-dom";
const MovileNav = ({ active, toggle }) => {
  if (!active) return null;
  return (
    <>
      <div className="movile-nav-backdrop" onClick={toggle}></div>
      <nav className="mobile-nav">
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to="/packages">Packages</Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/customers">Customers</Link>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <Link to="/customers">Customers</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MovileNav;
