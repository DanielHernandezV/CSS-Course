import "./nav-bar.styles.css";

const NavBar = () => {
  return (
    <header className="main-header">
      <div>
        <a href="index.html" className="main-header__brand">
          uHost
        </a>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="packages/index.html">Packages</a>
          </li>
          <li className="main-nav__item">
            <a href="customer/index/html">Customers</a>
          </li>
          <li className="main-nav__item main-nav__item--cta">
            <a href="start-hosting/index.html">Start Hosting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
