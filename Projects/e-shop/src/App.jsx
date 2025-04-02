import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <div className="container text-center">
              <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
              <p className="mt-4">Developed by Divyanshu Patel</p>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
