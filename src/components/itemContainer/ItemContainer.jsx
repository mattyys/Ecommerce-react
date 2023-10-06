import "./ItemContainer.css";
import {Item} from "../item/Item";
import { Constantes } from "../../assets/constantes";
import { useEffect, useState } from "react";

import PulseLoader from "react-spinners/PulseLoader";

export const ItemContainer = ({category}) => {
  //Se define estados para recuperar datos del API
  const [products, setProducts] = useState([]);

  //Funcion para obtener y guardar los datos que me devuelve el API
  const getProducts = async () => {
    try {
      const response = await fetch(`${Constantes.allProducts}`);
    
      const data = await response.json();
      
      setProducts(data);

    } catch (error) {
      console.log(error);
    }
  };
  const getProductByCategory = async () =>{
      try{
        const response = await fetch(`${Constantes.allProducts}`);
        const data = await response.json();
        const filteredProducts = data.filter((prod)=>prod.category.toLowerCase() === category);
        setProducts(filteredProducts);
      }catch(err){
        console.error(err);
      }
  };

  //Se utiliza useEffect par cargar datos al montar el componente

  useEffect(() => {
  if(category){
    getProductByCategory();
  }else{
         getProducts();
  }
  },[category]);

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((prod) => {
          return <Item product={prod} key={prod.id} />;
        })
      ) : (
        <PulseLoader color="#6b49ff" />
      )}
    </div>
  );
};
