import './App.css';
import Navbar from './components/Navbar/Navbar';
import StorePage from './components/StorePage/StorePage';

function App() {
  return (
    <div>
      <Navbar />
      <div className="store">
      <StorePage />
      </div>
    </div>
  );
}

export default App;
