import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import{Album} from "./pages/Album";
import {Event} from "./pages/Event";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <div className="navButton">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="navButton"> 
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/album" element={<Album />}/>
        <Route path="/event" element={<Event/>}/>
    
      </Routes>
    </>
  );
}

export default App;
// actual ruti tuka kje gi definirame so path
