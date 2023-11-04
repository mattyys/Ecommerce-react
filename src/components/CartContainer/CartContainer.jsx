import "./CartContainer.css";
import { CartItem } from "../CartItem/CartItem";

export const CartContainer = ({ cart, deleteProdById }) => {
  return (
    <div>
      {cart.map((prod) => (
        <CartItem
          key={prod.id}
          prod={prod}
          deleteProdById={deleteProdById}
        />
      ))}
    </div>
  );
};
