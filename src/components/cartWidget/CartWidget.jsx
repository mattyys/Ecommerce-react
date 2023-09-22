import { MdShoppingCart } from "react-icons/md";
import './CartWidget.css';

export const CartWidget = () =>{

    return (
        <div className="cart-widget">
            <MdShoppingCart size={25} />
            <div className="cart-widget__count">
                0
            </div>
        </div>
    );

};
