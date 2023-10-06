import { ItemContainer } from '../../components/itemContainer/ItemContainer';
import './Products.css';
import { useParams } from 'react-router-dom';

export const Products = () => {

  const {category} = useParams();

  return (
    
    <main>
        <h2>Product</h2>
        <ItemContainer  category={category}/>
    </main>
  )
}
