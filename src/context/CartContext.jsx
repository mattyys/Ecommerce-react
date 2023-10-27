//1. Se importa createContext parra crear el contexto y tambien useEffect y useState para manejar los estados
import { createContext, useState, useEffect } from "react";

//2. se crea el contexto para exportar
export const CartContext = createContext();

//3.se crea el componente proveedor del contexto, lo llamamos CartProvide
const CartProvider = ({children}) =>{
    const[cart, setCart] = useState([]); //se inicializa con un aray vacio
    const[total, setTotal] = useState(0); //se inicializa el total en 0
    const [totalItems, setTotalItems] = useState(0); //el total Items se inicializa en cero

    const calcularTotalItems = () => {

        if(cart.length === 0){//si el carito esta vacio se setea todo a cero
            setTotalItems(0);
            setTotal(0);
            return;
        }

        //agerga total de items en el carrito
        const totalItems = cart.reduce( (accumulator, value) => accumulator + value.qty,0);

        setTotalItems(totalItems);
        //funciona pero mantiene el ultimo valor verr de hacer lista de carrito para el total de el carrito
        const totalcurr = cart.reduce( (accumulator, value) => accumulator + value.price,0);
        setTotal(totalcurr);
        

    };

    const addProduct = (product, qty) => {//esta funcion modifica el estado del cart context

        //se verifica si el producta ya existe en el carrito
        if (cart.some((prod) => prod.id === product.id)){
            //si existe se actualiza la cantidad
            const newCart = cart.map((prod) => {//se recorre el carrito

                if(prod.id === product.id){
                //si el producto existe se actualiza la cantidad
                    return{...prod,//con el operador spread se compia las propiedades del producto
                        qty: prod.qty + qty};//actualizamos la cantidad
                }
                return prod;//si no es el producto se devuelve sin modificar
            });
            setCart(newCart);//se actualiza el carrito con uno nuevo con la cantidad actualizada
        }else{
            setCart([{qty, ...product}, ...cart]);//sino existe se agrega al carrito
        }

    };

    const deleteCart = () =>{//funcion para eliminar carrito, se lo setea en vacio
        setCart([]);
    };

    useEffect(() =>{
        calcularTotalItems();
    }, [cart]);

    //se retorna el componente contextProvider con el contexto y el children
    return(
        <CartContext.Provider
        value={{
            cart,
            addProduct,
            deleteCart,
            totalItems,
            total,
        }}>
            {children}

        </CartContext.Provider>
    );

};

export default CartProvider ;//exportamos el componente ContextProvider