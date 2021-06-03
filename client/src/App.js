import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') 
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    if (!saved.includes(id)){
      setSaved([...saved, id])
    }
  };

  return (
    <>
      <SavedList saved={saved} movieList={movieList}/>
      <Switch>
        <Route path='/movies/:id' render={() => <Movie addToSavedList={addToSavedList}/>}  />
        <Route path='/' render={(props) => 
        <MovieList history={props.history} movies={movieList}/>
        } />
      </Switch>
    </>
  );
}
