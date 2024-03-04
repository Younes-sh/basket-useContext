import {useContext} from 'react';
import { Link, NavLink} from 'react-router-dom';
import { BsBasket3Fill } from "react-icons/bs";
import './navbar.css';
import {appContext} from '../../App';
const Navbar = () => {
  const {addToCard, setAddToCard} = useContext(appContext);
  return (
    <div className='Navbar'>
        <div className='menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/basket'>
              <BsBasket3Fill />
              {
                addToCard > 0 && <span>{addToCard}</span>
              }
              
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar