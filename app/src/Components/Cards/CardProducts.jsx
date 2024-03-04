import {useContext} from 'react';
import './CardProducts.css';
import {appContext} from '../../App';
import DB from '../../Data/productPhone';

const CardTobasket = ({
  id,
  name,
  price,
  image
}) => {

  const {addToCard, setAddToCard, addProduct, setAddProduct} = useContext(appContext);


  const addToBasket = () => {
    if(isExisteProduct()){
      const UpdateProduct = [...addProduct]
      UpdateProduct.map(product => {
        if(product.id === id) {
          product.count += 1;
          product.totalPrice = product.price * product.count
        }
        setAddProduct(UpdateProduct);
        return 
      })
    }else {
      setAddToCard(addToCard + 1)
      const product = DB.find(product => product.id === id )
      product.count = 1;
      product.totalPrice = product.price * product.count;
      setAddProduct( prevent => [...prevent, product])
    }
  }

  function isExisteProduct() {
    return addProduct.some( product => product.id == id) 
  }

  return (
    <div className='Card'>
        <div className='container-image'>
            <img src={image} alt='' />
        </div>
        <div className='continer-info'>
            <p>{name}</p>
            <p>Price: {price.toLocaleString()}</p>
            <button onClick={addToBasket} type="button">Add to card</button>
        </div>
    </div>
  )
}

export default CardTobasket