import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import "../Css/Home.css";
import { getPopularMovies } from "../services/api";
import { searchMovies } from "../services/api";


function Home() {
  const [searchquery, setsearchquery] = useState("");
  const [moviesarr, setMovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true); //intially were gonna load the data

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        seterror("Failed to load movies");
      } finally {
        setloading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchquery.trim())return 
    if(loading ) return 
    setloading(true)
    try {
      const searchResult = await searchMovies(searchquery);
      setMovies(searchResult);
      seterror(null)
    } catch (error) {
      console.log(error)
      seterror("Failed to search")
    }
    finally{
      setloading(false)
    }

  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchquery}
          className="search-input"
          onChange={(e) => setsearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading?(<div className="loading">Loading....</div>):(
      <div className="movies-grid">
        {
          moviesarr.map((movieelement)=>(
            <MovieCard movieinfo={movieelement} key={movieelement.id}/>
          )
          )
        }

       
      </div>
      )}
    </div>
  );
}

export default Home;
