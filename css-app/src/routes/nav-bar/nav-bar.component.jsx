import "./nav-bar.styles.css";
import { Outlet, Link } from "react-router-dom";

import Footer from "../../component/footer/footer.component";

const NavBar = () => {
  return (
    <>
      <div className="backdrop"></div>
      <header className="main-header">
        <div>
          <Link to="/" className="main-header__brand">
            <img src="/temp-img/uhost-icon.png" alt="Uhost" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link to="/packages">Packages</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/customers">Customers</Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              <a href="start-hosting/index.html">Start Hosting</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
export default NavBar;
