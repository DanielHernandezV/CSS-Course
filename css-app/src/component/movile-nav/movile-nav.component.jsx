import "./movile-nav.styles.css";
import { Link } from "react-router-dom";
const MovileNav = ({ active, toggle }) => {
  return (
    <>
      <div
        className={`mobile-nav-backdrop  ${
          active ? "mobile-nav-backdrop-active" : ""
        } `}
        onClick={toggle}
      />
      <nav className={`mobile-nav  ${active ? "mobile-nav-active" : ""} `}>
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to="/packages">Packages</Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/customers">Customers</Link>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <Link to="/hosting">Start Hosting</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MovileNav;
