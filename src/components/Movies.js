import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
            <div>
              <h3>{'Title: ' + movie.title}</h3>
              <p>{`Showtime: ${movie.time} minutes`}</p>
              <p>Genres:</p>
              <ul>
                {movie.genres.map(genre => <li>{genre}</li>)}
              </ul>
              </div>
          )
        })}
    </div>
  );
};

export default Movies;
