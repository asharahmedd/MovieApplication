import "./App.css";

import NavBar from "./Components/NavBar";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";
import TVShows from "./Pages/TVShowspopular";
import Tvshowsairingtoday from "./Pages/TVshowsairtoday";
import Tvshowsmain from "./Pages/Tvshowsmain";
import TvshowsTopRated from "./Pages/TvshowsTopRated";
import Tvshowsonair from "./Pages/Tvshowsonair";

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TVshows/popular" element={<TVShows/>}/>
          <Route path="/TVshows" element={<Tvshowsmain/>}/>
          <Route path="/TVshows/airingtoday" element={<Tvshowsairingtoday />} />
          <Route path="/TVshows/toprated" element={<TvshowsTopRated />} />
          <Route path="/TVshows/OnAir" element={<Tvshowsonair />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
