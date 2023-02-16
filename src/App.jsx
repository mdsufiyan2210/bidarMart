import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import StorePage from './components/StorePage/StorePage';

function App() {
  return (
    <div>
      <Navbar />
      <div className="store">
      <StorePage />
      <Cart />
      </div>
    </div>
  );
}

export default App;
