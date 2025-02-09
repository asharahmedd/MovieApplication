import React from "react";
import "../Css/Moviecard.css";

function TVshowCard({ TVshowinfo }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${TVshowinfo.poster_path}`}
          alt={TVshowinfo.name}
        />
        <div className="movie-overlay">
        </div>
      </div>
      <div className="movie-info">
        <h3>{TVshowinfo.name}</h3>
        <p>{TVshowinfo.first_air_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default TVshowCard;