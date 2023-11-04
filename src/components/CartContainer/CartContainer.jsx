import "./CartContainer.css";
import { CartItem } from "../CartItem/CartItem";

export const CartContainer = ({ cart, deleteProductById }) => {
  return (
    <div>
      {cart.map((prod) => (
        <CartItem
          key={prod.id}
          prod={prod}
          deleteProductById={deleteProductById}
        />
      ))}
    </div>
  );
};
