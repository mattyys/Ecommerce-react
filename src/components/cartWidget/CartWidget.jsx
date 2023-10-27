import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdShoppingCart } from "react-icons/md";
import './CartWidget.css';

export const CartWidget = () =>{

    const {totalItems} = useContext(CartContext);//se exporta iseContext y cartCOntext para utilizarr en el widget el totalItems

    return (
        <div className="cart-widget">
            <MdShoppingCart size={25} />
            <div className="cart-widget__count">
                { totalItems }
            </div>
        </div>
    );

};
