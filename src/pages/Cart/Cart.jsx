import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContainer } from "../../components/CartContainer/CartContainer";
import "./Cart.css";

export const Cart = () => {
  const { cart, totalItems, total, deleteProdById } =
    useContext(CartContext);

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
        <p className="badge bg-success fs-4">Total: $ {total}</p>
      </div>
    </main>
  );
};
