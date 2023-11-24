import { MdDeleteForever } from "react-icons/md";
import './CartItem.css';
import { ItemCount } from "../itemCount/ItemCount";
import { useState } from "react";
//agregar context al carrito para modificar el on add y actualizar al carrito
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartItem = ({prod, deleteProdById})=>{
   const {addProduct} = useContext(CartContext); 
   
    const onAdd = (qty) =>{
        onPrice(qty);
        addProduct(prod,qty);
      };

    const [ countPrice, setCountPrice] = useState(prod.price);
    const onPrice = (qty) => {
        const price = prod.price * qty;
        setCountPrice(price);
        
    };
    
   


    return (
        <>
            <tr>
                <td><img src={prod.image} className="img-fluid" alt="Imagen de producto" /></td>
                <td>{prod.title}</td>
                <td>
                <ItemCount
                    stock={prod.stock}
                    initial={prod.qty}
                    onAdd={onAdd}
                 />
                </td>
                <td>{countPrice}</td>
                <td>
                    <button onClick={()=>{deleteProdById(prod.id)}}>
                        <MdDeleteForever color="#6b49ff" size={22} />
                    </button>
                </td>
            </tr>
        </>
    );
    
};