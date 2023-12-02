import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { MdShoppingCart } from "react-icons/md";
import './CartWidget.css';

export const CartWidget = () =>{

    const {totalItems} = useContext(CartContext);//se exporta iseContext y cartCOntext para utilizarr en el widget el totalItems

    const navigate = useNavigate();//se crea la constante navigate paa guardart useNavigate
    
    return (
        <div onClick={ () => { navigate('/cart')}} className="cart-widget">
            <MdShoppingCart size={30} />
            <div className="cart-widget__count">
                { totalItems }
            </div>
        </div>
    );

};
