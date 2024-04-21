
import {Route, Routes} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/HomePage/index.jsx";
import { Profile } from "./pages/profile.jsx";
import { Album } from "./pages/AlbumPage/index.jsx";
import { Event } from "./pages/EventPage/index.jsx";


function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/album" element={<Album />} />
        <Route path="/event" element={<Event />} />
     
      </Routes>
    </>
  );
}

export default App;
// actual ruti tuka kje gi definirame so path
