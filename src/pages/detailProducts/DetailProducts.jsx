import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Constantes } from "../../assets/constantes";
import PulseLoader from "react-spinners/PulseLoader";

import './DetailProducts.css'



export const DetailProducts = () =>{

    //1.obtener el paramatro id de la url
    const {id, category} = useParams(); //id es el nombre del parametro que definimos en app.jsx

    //2. obtener el producto de la API (En lugar de filtrar usaremos el metodo find)
    const [product, setProduct] = useState(null);//guardamos el producto en un estado

    const getProductById = async (id) => {
        try{
            const response = await fetch(Constantes.allProducts);
            const data = await response.json();//data es un array de productos
            const result = data.find( (prod)=> prod.id ===  Number(id) );
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
            
            <h2>DetailProduct</h2>

            <section>
                {
                    product 
                    ?
                    <div className="product-detail-container">
                        <div className="product-detail-container__detail">
                        <img src={product.image} alt={product.title}/>
                            <div className="product-detail-container__detail__info">

                                <h2>{ id ? `Products / ${product.category} / ${product.title}` : 'Product'}</h2>                      
                                <p>$ {product.price}</p>
                            </div>

                        </div>

                            <h4>desciption</h4>
                            <p>{product.description}</p>


                    </div>
                    : <PulseLoader color="#6b49ff" />
                }
            </section>
        </main>

    )

};