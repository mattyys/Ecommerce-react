import { ItemContainer } from "../itemContainer/ItemContainer";
import "./ProductsByCategory.css";

export const ProductsByCategory = ({category}) =>{
   

    return (
        <section className="container">
            <h2 className="title-category">{category}</h2>
            <ItemContainer category={category}  />
        </section>
    );
};