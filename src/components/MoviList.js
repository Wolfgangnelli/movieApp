import React from "react";
import MovieItem from "./MovieItem";

function MoviList({ movies }) {
  if (!movies) {
    return (
      <div>
        <p className="text-red-600 font-light">A NEW SEARCH TRY?</p>
        <h2 className="text-2xl text-gray-500 font-semibold">
          Found Nothing We Have
        </h2>
        <p className="text-sm">
          SORRY, WE COULDN'T FIND ANY MOVIES.
          <i className="far fa-grin-beam-sweat ml-1"></i>
        </p>
      </div>
    );
  }
  return (
    <div className="mx-2 grid">
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MoviList;
