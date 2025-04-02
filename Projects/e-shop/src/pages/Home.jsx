import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">Welcome to E-Shop</h1>
          <p className="home-hero-subtitle">Discover amazing products at unbeatable prices.</p>
          <Link 
            to="/products" 
            className="home-hero-button"
          >
            Browse Products
          </Link>
        </div>
      </div>

      <div className="home-categories">
        <div className="home-category-card">
          <h2 className="home-category-title">Electronics</h2>
          <p className="home-category-description">Shop the latest gadgets and technology.</p>
          <Link 
            to="/products?category=electronics" 
            className="home-category-link"
          >
            View Electronics →
          </Link>
        </div>
        
        <div className="home-category-card">
          <h2 className="home-category-title">Clothing</h2>
          <p className="home-category-description">Discover trendy and comfortable clothing.</p>
          <Link 
            to="/products?category=clothing" 
            className="home-category-link"
          >
            View Clothing →
          </Link>
        </div>
        
        <div className="home-category-card">
          <h2 className="home-category-title">Accessories</h2>
          <p className="home-category-description">Complete your look with our accessories.</p>
          <Link 
            to="/products?category=accessories" 
            className="home-category-link"
          >
            View Accessories →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 