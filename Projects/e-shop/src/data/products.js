const products = [
  {
    id: 1,
    name: "Smartphone X",
    price: 45999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    description: "Latest smartphone with advanced features and long battery life.",
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 99999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    description: "High-performance laptop for professional use with 16GB RAM.",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 12999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    description: "Noise-cancelling wireless headphones with superior sound quality.",
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "clothing",
    description: "Comfortable cotton t-shirt available in various colors.",
  },
  {
    id: 5,
    name: "Denim Jeans",
    price: 3999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "clothing",
    description: "Classic denim jeans with modern fit.",
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 6999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "footwear",
    description: "Lightweight running shoes with cushioned soles.",
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 2499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    description: "Genuine leather wallet with multiple card slots.",
  },
  {
    id: 8,
    name: "Smartwatch",
    price: 15999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    description: "Feature-rich smartwatch with health monitoring.",
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" },
];

export default products; 