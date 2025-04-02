import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ title, year, genre, rating, image }) => {
  // Calculate the star rating display
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;
    
    // Add filled yellow stars for the rating
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    // Add empty gray stars for the remaining
    for (let i = rating; i < maxRating; i++) {
      stars.push(<span key={i + rating} className="star empty">★</span>);
    }
    
    return stars;
  };

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={image} alt={`${title} movie poster`} />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-year">YEAR: {year}</p>
        <p className="movie-genre">GENRE: {genre}</p>
        <div className="movie-rating">
          RATING: {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 