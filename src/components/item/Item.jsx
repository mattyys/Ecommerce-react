import PropTypes from "prop-types";
import "./Item.css";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const Item = ({ product }) => {

  const {addProduct} = useContext(CartContext);
  
  const onAdd = (qty) =>{
    addProduct(product, qty);
  };



  return (
    <article className="product-card">
      <img
        src={product.image}
        alt="Imagen producto"
        className="img-fluid"
      />
      <div className="product-card__info-container">
        <Link to={`/detail/${product.id}`}>
          <h3 className="product-card__info-container__title">
            {product.title}
          </h3>
        </Link>
        <span className="product-card__info-container__title">
          $ {product.price}
        </span>
        <ItemCount
          stock={product.stock}
          initial={1}
          className="product-card__info-container__count"
          onAdd={onAdd}
        />
      </div>
    </article>
  );
};
export default Item;

Item.protoType = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
  }),
};
Item.defaultProps = {
  stock: 0,
};
