import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer }from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/Inicio' element={<App greeting='BullMarket' />} />
            <Route path='/Items/:categoryId' element={<ItemListContainer/>} />
            <Route path='/Detail/:prodId' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<CartContainer/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>


  );
}

export default App;
