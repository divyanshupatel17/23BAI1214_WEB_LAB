import { categories } from '../data/products';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <h2 className="category-filter-title">Categories</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-button ${
              selectedCategory === category.id 
                ? 'category-button-selected' 
                : 'category-button-unselected'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 