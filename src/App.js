import "./App.css";
import NavBar from "./features/Navbar";
import Data from "./features/Data";
import { Routes, Route } from "react-router-dom";
import Favorites from "./features/Favorites";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
