import PropTypes from "prop-types";
import "./Item.css";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt="Imagen producto"
        className="product-card__image"
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
          stock={10}
          initial={1}
          className="product-card__info-container__count"
        />
      </div>
    </article>
  );
};
export default Item;

Item.protoType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
Item.defaultProps = {
  stock: 0,
};
