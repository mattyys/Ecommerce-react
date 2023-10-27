import { NavLink } from "react-router-dom";
import { MdArrowDropDown, MdMenu } from "react-icons/md";
import { CartWidget } from "../../components/cartWidget/CartWidget";
import "./NavBar.css";
import { useState } from "react";
import { Constantes } from "../../assets/constantes";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const NavBar = () => {
  const brand =
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211";

  const [showCategories, setShowCategories] = useState(false);
  
  const handleCategories = () => {
      setShowCategories(!showCategories);
  };

  const {categories} = Constantes;

const {total} = useContext(CartContext);

  return (

    <header className="navbar-container">

      <nav className="navbar-container__nav">
        <NavLink to="/">Inicio</NavLink>

        <div className="links-group">
            <NavLink to="/products">Productos</NavLink>
            <MdArrowDropDown size={24} onClick={handleCategories}/>
            {
              showCategories && (
                <div className="links-group__menu">
                  <NavLink to={`/products/${categories.mens}`} onClick={handleCategories}>{categories.mens}</NavLink>
                  <NavLink to={`/products/${categories.womans}`} onClick={handleCategories}>{categories.womans}</NavLink>
                  <NavLink to={`/products/${categories.jewelery}`} onClick={handleCategories}>{categories.jewelery}</NavLink>
                  <NavLink to={`/products/${categories.electronic}`} onClick={handleCategories}>{categories.electronic}</NavLink>
                </div>
              )
            }
        </div>

        <a>Quienes somos</a>
      </nav>

      <div className="menu-icon">
        <MdMenu size={25} />
        <span>Menu</span>
      </div>

      <img src={brand} alt="Logo navbar" />

      <span > ${total} </span>

      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </header>
  );
};
