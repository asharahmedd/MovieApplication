import React, { useState, useEffect } from "react";
import { gettvshowstoprated } from "../services/api";
import TVshowCard from "../Components/TVshowCard";

function TvshowsTopRated() {
     const [TVshowstoprated, setTVshowstoprated] = useState([]);
      const [error, seterror] = useState(null);
      const [loading, setloading] = useState(true);

        useEffect(() => {
          const loadTvshowstoprated = async () => {
            try {
              const TVshowstopratedvar = await gettvshowstoprated();
              setTVshowstoprated(TVshowstopratedvar);
            } catch (err) {
              console.log(err);
              seterror("Failed to load TV shows");
            } finally {
              setloading(false);
            }
          };
          loadTvshowstoprated();
        }, []);
  return (
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
          TV Shows Top Rated
        </h2>
        <div className="movies-grid">
          {TVshowstoprated.map((TVshowelement) => (
            <TVshowCard TVshowinfo={TVshowelement} key={TVshowelement.id} />
          ))}
        </div>
      </>
    )}
  </div>
  )
}

export default TvshowsTopRated
