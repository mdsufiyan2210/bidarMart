import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import StorePage from './components/StorePage/StorePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/homepage/HomePage';
import {useSelector} from 'react-redux'

function App() {
  const visible= useSelector(state=> state.visibleadded )
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<StorePage />} />
        <Route path='/cart' element={  <Cart /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
