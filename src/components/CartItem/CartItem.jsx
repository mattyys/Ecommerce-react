import { MdDeleteForever } from "react-icons/md";



export const CartItem = ({prod, deleteProdById})=>{

    return (
        <div>
            <span>
                {prod.title}  {prod.qty} 
            </span>
            <button onClick={()=>{deleteProdById(prod.id)}}>
                <MdDeleteForever color="#6b49ff" size={15} />
            </button>
        </div>
    );
    
};