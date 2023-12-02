import { MdDeleteForever } from "react-icons/md";
import './CartItem.css';
import { useEffect, useState } from "react";


export const CartItem = ({prod, deleteProdById})=>{

    const [totalPrice, setTotalPrice] = useState(1);
    
    useEffect(()=>{
        let total = prod.qty * prod.price;
        setTotalPrice(total);

    },totalPrice);
      
   

    return (
        <>
            <tr>
                <td><img src={prod.image} className="img-prod" alt="Imagen de producto" /></td>
                <td>{prod.title}</td>
                <td>{prod.qty}</td>
                <td>{prod.price}</td>
                <td>{totalPrice}</td>
                <td>
                    <button onClick={()=>{deleteProdById(prod.id)}}>
                        <MdDeleteForever color="#6b49ff" size={22} />
                    </button>
                </td>
            </tr>
        </>
    );
    
};