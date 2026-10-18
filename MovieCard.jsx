import React from "react";

const MovieCard = ({ movie, onSelectMovie }) => {
  return (
    <div className="movie-card" onClick={() => onSelectMovie(movie)}>
      <div className="card-image-box">
        <img src={movie.image} alt={movie.movieName} className="card-image" />
        <div className="episode-tag">Episode {movie.episode}</div>
      </div>
      <h3 className="card-title">{movie.movieName}</h3>
    </div>
  );
};

export default MovieCard;