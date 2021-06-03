import React from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function MovieList({addToSavedList, movies}) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }} key={movie.id}>
          <div className="movie-card">
            <MovieCard movie={movie}/>
          </div>
        </Link>
      ))}
    </div>
  );
}

