import { useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { CartContainer } from "../../components/CartContainer/CartContainer";
import "./Cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalItems, total, deleteProdById } =
    useContext(CartContext);

  const [isEmptyCart, setIsEmptyCart] = useState(true);  
 
  useEffect(() => {
    cart.length > 0 ? setIsEmptyCart(false) : setIsEmptyCart(true);
  }, isEmptyCart);


  return (
    <main>
      <div>
        {cart.length === 0 ? (
          <p className="text-start fs-3">UPS!! No tienes productos en tu carrito </p>
        ) : (
          <CartContainer cart={cart} deleteProdById = {deleteProdById} />
        )}
      </div>
      <div className="text-center">
        <p className="fs-4">Total items: {totalItems}</p>
        <p className="badge bg-success fs-5">Total: $ {total}</p>
      <Link to={isEmptyCart ? "/cart" :"/payment"}  >
        <button className="btn btn-primary m-3  badge fs-5" disabled={isEmptyCart}>Pagar</button>
      </Link>
      </div>
    
     
      
    </main>
  );
};
