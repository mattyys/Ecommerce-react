//import "./CartContainer.css";
import { CartItem } from "../CartItem/CartItem";

export const CartContainer = ({ cart, deleteProdById }) => {
  return (
    <div className="table-responsive{-sm|-md|-lg|-xl|-xxl}">   
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Detalle</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {cart.map((prod) => (
              <CartItem
                key={prod.id}
                prod={prod}
                deleteProdById={deleteProdById}
              />
            ))}
          </tbody>

        </table>
      
    </div>
  );
};
