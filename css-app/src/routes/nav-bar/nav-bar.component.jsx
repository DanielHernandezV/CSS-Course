import "./nav-bar.styles.css";
import { Outlet, Link } from "react-router-dom";
import MovileNav from "../../component/movile-nav/movile-nav.component";
import Footer from "../../component/footer/footer.component";
import HamburguerButton from "../../component/hamburguer-button/hamburguer-button.component";
import { useState } from "react";
import ModalDirectory from "../../component/modal-directory/modal-directory.component";
const NavBar = () => {
  const [togleHam, setTogleHam] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => setToggleModal(!toggleModal);
  const setMovileNav = () => setTogleHam(!togleHam);

  return (
    <>
      <header className="main-header">
        <div>
          <HamburguerButton togleFunction={setMovileNav} />
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
              <a onClick={toggleModalHandler}>Start Hosting</a>
            </li>
          </ul>
        </nav>
      </header>
      <MovileNav active={togleHam} toggle={setMovileNav} />
      <main>
        <ModalDirectory
          active={toggleModal}
          modalTogle={toggleModalHandler}
          direction="/hosting"
        />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default NavBar;
