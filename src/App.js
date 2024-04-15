
import {Route, Routes} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Album } from "./pages/album";
import { Event } from "./pages/event";


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
