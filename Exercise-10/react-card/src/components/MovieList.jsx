import React from 'react';
import MovieCard from './MovieCard';
import titanicImg from '../assets/titanic.jpg';
import avatarImg from '../assets/avatar.jpg';
import inceptionImg from '../assets/inception.jpg';
import '../styles/MovieList.css';

const MovieList = () => {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: 'TITANIC',
      year: '2034',
      genre: 'ACTION',
      rating: 4,
      image: titanicImg
    },
    {
      id: 2,
      title: 'AVATAR',
      year: '2025',
      genre: 'SCI-FI',
      rating: 5,
      image: avatarImg
    },
    {
      id: 3,
      title: 'INCEPTION',
      year: '2028',
      genre: 'THRILLER',
      rating: 4,
      image: inceptionImg
    }
  ];

  return (
    <div className="movie-list-container">
      <h1>Featured Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            rating={movie.rating}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList; 