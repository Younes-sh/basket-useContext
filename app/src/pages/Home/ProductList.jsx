import {useState} from 'react';
import CardProducts from "../../Components/Cards/CardProducts";
import DB from '../../Data/productPhone';
import './Home.css';

const ProductList = () => {
    const [products] = useState(DB);
  return (
    <div className='ProductList'>
        {
            products.map(product => <CardProducts key={product.id} {...product} />)
        }
    </div>
  )
}

export default ProductList