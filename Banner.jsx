import React from "react";
const Banner = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="explore-section">
      <h2 className="section-title">Explore</h2>
      <p className="section-subtitle">What are you gonna watch today ?</p>

      <div className="banner-card">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="banner-image"
        />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-movie-title">{movie.movieName}</h1>
          <p className="banner-movie-desc">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;