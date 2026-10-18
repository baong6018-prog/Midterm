import React, { useState } from "react";
import { movieData } from "./data/movie";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movieData[0]);

  return (
    <div className="app-container">
      <Navbar />
      <Banner movie={selectedMovie} />
      <div className="new-release-section">
        <h2 className="section-title">New Release</h2>
        <div className="movie-list">
          {movieData.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelectMovie={setSelectedMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
