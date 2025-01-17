import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Tvshows.css'

function Tvshowsmain() {
  return (
    <div className="Tvshow-links">
      <NavLink to="/TVshows/popular" exact activeClassName="active">
        <button>Popular</button>
      </NavLink>
      <NavLink to="/TVshows/airingtoday" exact activeClassName="active">
        <button>Will Air Today</button>
      </NavLink>      
      <NavLink to="/TVshows/toprated" exact activeClassName="active">
        <button>Top Rated Shows</button>
      </NavLink>   
      <NavLink to="/TVshows/onAir" exact activeClassName="active">
        <button>On Air</button>
      </NavLink>
    </div>
  );
}

export default Tvshowsmain;
