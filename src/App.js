import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { TvShow } from "./pages/TvShow/TvShow";
import { TopRated } from "./pages/Top-rated/TopRated";
import { UpComming } from "./pages/UpComming/UpComming";
import { Routes, NavLink, Route } from "react-router-dom";
import { Loader } from "./Components/Loader";


function App() {
  return (
    <div className="App">
      <div className="header-box">
        <div className="container">
          <header className="header">
            <NavLink className="header__nav-link" to="/">
              Home Page
            </NavLink>
            <NavLink className="header__nav-link" to="/About">
              Popular Movies
            </NavLink>
            <NavLink className="header__nav-link" to="/TopRated">
              Top-rated Movies
            </NavLink>
            <NavLink className="header__nav-link" to="/upComming">
              Upcomming Movies
            </NavLink>
            <NavLink className="header__nav-link" to="/tvShow">
              Tv-show
            </NavLink>
          </header>
        </div>
      </div>
      <div>
        <Loader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/tvShow" element={<TvShow />} />
          <Route path="/upComming" element={<UpComming />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
