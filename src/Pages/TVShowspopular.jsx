import React, { useState, useEffect } from "react";
import { getPopularTVShows } from "../services/api";
import TVshowCard from "../Components/TVshowCard";

function TVShows() {
  const [TVshows, setTVshows] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadpopularTVShows = async () => {
      try {
        const PopularTVShows = await getPopularTVShows();
        setTVshows(PopularTVShows);
      } catch (err) {
        console.log(err);
        seterror("Failed to load TV shows");
      } finally {
        setloading(false);
      }
    };
    loadpopularTVShows();
  }, []);

  return (
    <>
      <div className="home">
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">Loading....</div>
        ) : (
          <>
            <h2
              style={{
                fontSize: "1.5em",
                display: "flex",
                justifyContent: "center",
                margin: 0,
              }}
            >
              Popular Tv shows
            </h2>
            <div className="movies-grid">
              {TVshows.map((TVshowelement) => (
                <TVshowCard TVshowinfo={TVshowelement} key={TVshowelement.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TVShows;
