import "./ItemContainer.css";
import {Item} from "../item/Item";
import { Constantes } from "../../assets/constantes";
import { useEfect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export const ItemContainer = () => {
  //Se define estados para recuperar datos del API
  const [products, setProducts] = useState([]);

  //Funcion para obtener y guardar los datos que me devuelve el API
  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Se utiliza useEffect par cargar datos al montar el componente

  useEfect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((prod) => {
          return <Item product={prod} key={prod.key} />;
        })
      ) : (
        <PulseLoader color="#6b49ff" />
      )}
    </div>
  );
};
