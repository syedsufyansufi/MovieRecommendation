import "./App.css";
import Home from "./Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorites.jsx";
import NavBar from "./Pages/NavBar.jsx";
import {MovieProvider} from './contexts/MovieContext.jsx'

function App() {
  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>

      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
