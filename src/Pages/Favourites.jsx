import React from "react";
import "../Css/favourites.css";
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favourites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites && favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movieelement) => (
            <MovieCard movieinfo={movieelement} key={movieelement.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorites Yet</h2>
          <p>
            Start adding your favorite movies, shows, or items, and they will
            appear here!
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites;
