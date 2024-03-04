import {useContext} from 'react';
import './basket.css';
import { TfiTrash } from "react-icons/tfi";
import { appContext } from '../../App';

const CardBasket = ({
  id,
  name,
  price,
  image, 
  count,
  totalPrice,   
}) => {
  const { addProduct,setAddProduct, addToCard, setAddToCard} = useContext(appContext);

  const increaseProduct = () => {
    const UpdateProductBasket = [...addProduct]
    UpdateProductBasket.map(product => {
      if(product.id == id) {
        product.count += 1;
        product.totalPrice = product.price * product.count;
      }
      setAddProduct(UpdateProductBasket);
      return
    })
  }

  const decreaseProduct = () => {
    const UpdateProductBasket = [...addProduct]
    UpdateProductBasket.map(product => {
      if(product.id == id) {
        product.count -= 1;
        product.totalPrice = product.price * product.count
        setAddProduct(UpdateProductBasket);
      }
    })
  }

  const removeProduct = () => {
    setAddToCard(addToCard - 1)
    const UpdateProductBasket = addProduct.filter(product => product.id !== id)
    setAddProduct(UpdateProductBasket);
  }

  return (
    <div className='container-product-basket'>
        <div className='container-image-basket'>
          <img src={image} alt={name} />
        </div>
        <div>
          <p>{name}</p>
          <p>price: {price}</p>
          {
            count > 1 && <p>Total price: {totalPrice}</p>
          }
        </div>
        <div className='container-button-basket'>
          {
            count > 1 ? <button onClick={decreaseProduct} type="button">-</button> : <button onClick={removeProduct} type="button"><TfiTrash /></button>
          }
          
          <p style={{margin:'0 4px'}}>{count}</p>
          
          <button onClick={increaseProduct} type="button">+</button>
        </div>
    </div>
  )
}

export default CardBasket