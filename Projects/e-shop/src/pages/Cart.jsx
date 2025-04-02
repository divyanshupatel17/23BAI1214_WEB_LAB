import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  
  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="container">
        <h1 className="products-title">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-lg text-gray-300 mb-6">Your cart is empty</p>
            <Link 
              to="/products" 
              className="home-hero-button"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Order Summary</h2>
                
                <div className="border-t border-b py-4 mb-4 border-gray-700">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-white">₹{getTotalPrice().toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-white">₹99</span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-lg font-semibold text-white">₹{(getTotalPrice() + 99).toLocaleString('en-IN')}</span>
                </div>
                
                <button
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors mb-2"
                >
                  Checkout
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded-md hover:bg-gray-600 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 