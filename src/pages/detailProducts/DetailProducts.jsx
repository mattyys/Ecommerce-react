import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Constantes } from "../../assets/constantes";



export const DetailProducts = () =>{

    //1.obtener el paramatro id de la url
    const {id} = useParams(); //id es el nombre del parametro que definimos en app.jsx

    //2. obtener el producto de la API (En lugar de filtrar usaremos el metodo find)
    const [product, setProduct] = useState(null);//guardamos el producto en un estado

    const getProductById = async (id) => {
        try{
            const response = await fetch(Constantes.allProducts);
            const data = await response.json();//data es un array de productos

            const result = data.find( (prod)=> prod.id ===  Number(id) );//con 2 iguales es comparacion no estricta
            setProduct(result);
        }catch(error){
            console.error(error);
        }

    };
    useEffect(  () => {
        getProductById(id);
    }),[id];

    return (
        <main>
            <h2>Derrtail Product</h2>

            <section>

            </section>
        </main>

    )

};