import {createContext, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';

import Navbar from './Components/Navbar/Navbar';

export const appContext = createContext();

const App = () => {
  const [ addToCard, setAddToCard] = useState(0);
  const [ addProduct, setAddProduct] = useState([])
  return (
    <div className='App'>
      <BrowserRouter>
        <appContext.Provider value={{
          addToCard,
          setAddToCard,
          addProduct,
          setAddProduct
        }}>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/basket' element={<Basket />} />
              </Routes>
        </appContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App