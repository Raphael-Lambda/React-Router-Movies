import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SavedList({ saved, movieList}) {
  const { push } = useHistory()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {movieList.map(movie => {
        if(saved.includes(String(movie.id))){
          return(
          <span key={movie.id} className="saved-movie">{movie.title}</span>
          )}
      })}
      <div className="home-button" onClick={() => push("/")}>Home</div>
    </div>
  );
}
