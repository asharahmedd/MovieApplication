import React, { useState, useEffect } from "react";
import { gettvshowsonair } from "../services/api";
import TVshowCard from "../Components/TVshowCard";

function Tvshowsonair() {
      const [TVshowsonair, setTVshowsonair] = useState([]);
      const [error, seterror] = useState(null);
      const [loading, setloading] = useState(true);

        useEffect(() => {
          const loadtvshowsonair = async () => {
            try {
              const TVshowsonair = await gettvshowsonair();
              setTVshowsonair(TVshowsonair);
            } catch (err) {
              console.log(err);
              seterror("Failed to load TV shows");
            } finally {
              setloading(false);
            }
          };
          loadtvshowsonair();
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
            TV Shows Currently On Air
          </h2>
          <div className="movies-grid">
            {TVshowsonair.map((TVshowelement) => (
              <TVshowCard TVshowinfo={TVshowelement} key={TVshowelement.id} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Tvshowsonair
