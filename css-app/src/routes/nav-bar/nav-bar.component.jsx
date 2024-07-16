import "./nav-bar.styles.css";
import { Outlet, Link } from "react-router-dom";
import MovileNav from "../../component/movile-nav/movile-nav.component";
import Footer from "../../component/footer/footer.component";
import HamburguerButton from "../../component/hamburguer-button/hamburguer-button.component";
import { useState } from "react";
const NavBar = () => {
  const [togleHam, setTogleHam] = useState(false);
  const setMovileNav = () => setTogleHam(!togleHam);

  return (
    <>
      <header className="main-header">
        <div>
          <HamburguerButton
            togleFunction={setMovileNav}
            className="hamburguer-ico"
          />
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
      <MovileNav active={togleHam} toggle={setMovileNav} />
      <Outlet />
      <Footer />
    </>
  );
};
export default NavBar;
