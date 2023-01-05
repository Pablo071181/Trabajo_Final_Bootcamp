import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logoRestaurant from '../../assets/img/logo_restaurant.jpg';

const Header = () => {
  const header = useRef();
  const nav = useRef();

  const documentScroll = () => {
    header.current?.classList.toggle('header--scroll', window.scrollY > 0);
    nav.current?.classList.toggle('nav--scroll', window.scrollY > 0);
  };

  document.addEventListener('scroll', documentScroll);

  return (
    <header
      className="header"
      ref={header}
    >
      <nav
        className="nav"
        ref={nav}
      >
        <div className="container elements elements--header-nav">
          <Link to="/">
            <img src={logoRestaurant} alt="Logo Sin E Spoiler" width="40" height="40" className="nav__logo" />
          </Link>
          <ul className="menu">
            <li>
              <NavLink
                to="/restaurant"
                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
              >
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservas"
                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
              >
                Reservas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/intranet"
                className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
              >
                Intranet
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;