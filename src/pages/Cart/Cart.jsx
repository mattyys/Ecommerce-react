import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContainer } from "../../components/CartContainer/CartContainer";
import "./Cart.css";

export const Cart = () => {
  const { cart, totalItems, total, deleteProductById } =
    useContext(CartContext);

  return (
    <main>
      <div>
        {cart.length === 0 ? (
          <p>No tienes productos en tu carito </p>
        ) : (
          <CartContainer cart={cart} deleteProductById = {deleteProductById} />
        )}
      </div>
      <div>
        <p>Total items: {totalItems}</p>
        <p>Total: $ {total}</p>
      </div>
    </main>
  );
};
