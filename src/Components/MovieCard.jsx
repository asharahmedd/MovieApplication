import React from 'react'
import '../Css/Moviecard.css'
import { useMovieContext } from '../Context/MovieContext'

function MovieCard({movieinfo}) {

    const {isfavorite,addtofavorites,removefromfavorites} = useMovieContext();
    const favorite = isfavorite(movieinfo.id)
    
    function onfav(e){
        e.preventDefault();
        
        if(favorite) {
            removefromfavorites(movieinfo.id); 
            alert(`${movieinfo.title} removed from favorites`);

        }
        else {
            addtofavorites(movieinfo); 
            alert(`${movieinfo.title} added to favorites`);

        };

    }
  return (
    <div className='movie-card'>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movieinfo.poster_path}`} alt={movieinfo.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite?"active":""}`} onClick={onfav}>
                ♥
                </button>
            </div>

        </div>
        <div className="movie-info">
            <h3>{movieinfo.title }</h3>
            <p>{movieinfo.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}

export default MovieCard
