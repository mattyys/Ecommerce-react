import { MdDeleteForever } from "react-icons/md";
import './CartItem.css';



export const CartItem = ({prod, deleteProdById})=>{

    return (
        <div className="product-line-container">
            <img src={prod.image} alt="Imagen de producto" />
            <h4>{prod.title}</h4>
            <h4>
              {prod.qty} 
            </h4>
            <h4>{(prod.qty * prod.price)}</h4>
            <button onClick={()=>{deleteProdById(prod.id)}}>
                <MdDeleteForever color="#6b49ff" size={22} />
            </button>
        </div>
    );
    
};