import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/HomePage/index.jsx";
import { Profile } from "./pages/profile.jsx";
import { Album } from "./pages/AlbumPage/index.jsx";
import { Event } from "./pages/EventPage/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import "./App.css";
import Routing from "./components/Routing/index.jsx";
function App() {
  return (
    <><Routing/></>
  );
} 

export default App;
// actual ruti tuka kje gi definirame so path
/*<>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/album" element={<Album />} />
    </Routes>
    </>*/