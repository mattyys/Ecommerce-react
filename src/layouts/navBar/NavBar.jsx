import { NavLink } from "react-router-dom";
import { MdArrowDropDown, MdMenu } from "react-icons/md";
import { CartWidget } from "../../components/cartWidget/CartWidget";
import "./NavBar.css";
import { useState } from "react";
import { Constantes } from "../../assets/constantes";

export const NavBar = () => {
  const brand =
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211";

  const [showCategories, setShowCategories] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleCategories = () => {
      setShowCategories(!showCategories);
  };

  

  const {categories} = Constantes;



  return (

    <header className="navbar-container">

      <nav className={menuOpen ? "navbar-container__nav-min" : "navbar-container__nav"}>
        <NavLink to="/">Inicio</NavLink>

        <div className={menuOpen ? "links-group-min" : "links-group"}>
            <NavLink to="/products">Productos</NavLink>
            <MdArrowDropDown size={24} onClick={handleCategories}/>
            {
              showCategories && (
                <div className={menuOpen ? "links-group__menu-min min":"links-group__menu"}>
                  <NavLink to={`/products/${categories.mens}`} onClick={handleCategories}>{categories.mens}</NavLink>
                  <NavLink to={`/products/${categories.womans}`} onClick={handleCategories}>{categories.womans}</NavLink>
                  <NavLink to={`/products/${categories.jewelery}`} onClick={handleCategories}>{categories.jewelery}</NavLink>
                  <NavLink to={`/products/${categories.electronic}`} onClick={handleCategories}>{categories.electronic}</NavLink>
                </div>
              )
            }
        </div>

        <NavLink to={'/aboutus'}>Quienes somos</NavLink>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <MdMenu size={25} />
        <span>Menu</span>

      </div>
      <NavLink to="/" >
        <img src={brand} alt="Logo navbar" />
      </NavLink>

  

      <div className="cart-widget-container">
        <CartWidget  /> 
      </div>
    </header>
  );
};
