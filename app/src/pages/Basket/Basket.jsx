import {useContext} from 'react';
import {appContext} from '../../App';
import CardBasket from './CardBasket';

const Basket = () => {
const {addToCard, addProduct} = useContext(appContext);

  return (
    <div className='Basket'>
      <div className='content-basket'>
        {
          addToCard > 0 ? <div>
            {
              addProduct.map(item => <CardBasket key={item.id} {...item} />)
            }
          </div> : <div><p>Your basket is empty</p></div>
        }
      </div>

    </div>
  )
}

export default Basket