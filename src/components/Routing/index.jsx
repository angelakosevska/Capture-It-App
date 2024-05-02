import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "../../pages/HomePage/index.jsx";
import { Profile } from "../../pages/profile.jsx";
import { Album } from "../../pages/AlbumPage/index.jsx";
import { Event } from "../../pages/EventPage/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
const Routing = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/album" element={<Album />} />
      </Route>
    </Routes>
    </>
  );
};

export default Routing;
