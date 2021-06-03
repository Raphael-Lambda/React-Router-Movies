import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function Movie({addToSavedList}) {

  const [movie, setMovie] = useState();

  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        setMovie(response.data)
       })
      .catch(error => {
        console.error(error);
      });

  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard key={movie.id} movie={movie} />
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={() => addToSavedList(id)}>Save</div>
    </div>
  );
}
