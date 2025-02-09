import React, { useState, useEffect } from "react";
import { gettvshowsairingtoday } from "../services/api";
import TVshowCard from "../Components/TVshowCard";

function Tvshowsairingtoday() {
  const [TVshowsair, setTVshowsair] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadTvshowsairingtoday = async () => {
      try {
        const TVshowsairtoday = await gettvshowsairingtoday();
        setTVshowsair(TVshowsairtoday);
      } catch (err) {
        console.log(err);
        seterror("Failed to load TV shows");
      } finally {
        setloading(false);
      }
    };
    loadTvshowsairingtoday();
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
            TV Shows Airing today
          </h2>
          <div className="movies-grid">
            {TVshowsair.map((TVshowelement) => (
              <TVshowCard TVshowinfo={TVshowelement} key={TVshowelement.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Tvshowsairingtoday;
