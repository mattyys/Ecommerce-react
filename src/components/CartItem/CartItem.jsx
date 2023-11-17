import { MdDeleteForever } from "react-icons/md";
import './CartItem.css';
import { ItemCount } from "../itemCount/ItemCount";
import { useState } from "react";
//agregar context al carrito para modificar el on add y actualizar al carrito


export const CartItem = ({prod, deleteProdById})=>{
   
    const onAdd = (qty) =>{
        onPrice(qty);
        
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
                    stock={10}
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