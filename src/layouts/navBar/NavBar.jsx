import { NavLink } from "react-router-dom";
import { MdArrowDropDown, MdMenu } from "react-icons/md";
import { CartWidget } from "../../components/cartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  const brand =
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211";

  return (
    <header className="navbar-container">

      <nav className="navbar-container__nav">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products">Productos</NavLink>
        <a>Quienes somos</a>
      </nav>

      <div className="menu-icon">
        <MdMenu size={25} />
        <MdArrowDropDown size={24} />
        <span>Menu</span>
      </div>

      <img src={brand} alt="Logo navbar" />

      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </header>
  );
};
