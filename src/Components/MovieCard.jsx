import React from 'react';
import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const FevClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <h3 className='movie-title'>{movie.title}</h3>
      <div className='movie-overlay'>
        <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={FevClick}>
          ♡
        </button>
      </div>
      <div className='movie-info'>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;