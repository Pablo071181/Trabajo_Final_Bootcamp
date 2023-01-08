import { useRef } from "react";
//import { Link, NavLink } from "react-router-dom";

//import logoRestaurant from '../../assets/img/logo_restaurant.jpg';

import Navbar from "./Navbar";

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
      <Navbar className="container elements elements--header-nav"/>
    </header>
  );
};

export default Header;