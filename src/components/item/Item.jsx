import PropTypes from 'prop-types';
import './Item.css';
import {ItemCount} from '../itemCount/ItemCount';

export const Item = ({product}) => {

    return(
        <article className="product-card">
            <img src={product.image} alt="Imagen producto" className="product-card__image" />
            <div className="product-card__info-container">
            <h3 className="product-card__title">{product.title}</h3>
            <span className="product-card__title">$ {product.price}</span>
            <ItemCount stock={10} initial={1} className="product-card__count"/>
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
}
Item.defaultProps = {
    stock:0
}