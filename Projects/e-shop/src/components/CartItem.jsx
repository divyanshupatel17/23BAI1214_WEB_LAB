import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <img 
          src={item.image} 
          alt={item.name} 
          className="cart-item-image"
        />
        <div className="cart-item-info">
          <h3>{item.name}</h3>
          <p>₹{item.price.toLocaleString('en-IN')}</p>
        </div>
      </div>
      
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="quantity-btn quantity-btn-minus"
          >
            -
          </button>
          <span className="quantity-display">
            {item.quantity}
          </span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="quantity-btn quantity-btn-plus"
          >
            +
          </button>
        </div>
        
        <button 
          onClick={() => removeFromCart(item.id)}
          className="remove-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem; 