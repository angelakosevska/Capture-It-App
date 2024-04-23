import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "../../pages/HomePage/index.jsx";
import { Profile } from "../../pages/profile.jsx";
import { Album } from "../../pages/AlbumPage/index.jsx";
import { Event } from "../../pages/EventPage/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
/*const Layout = () => {
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
};
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/album" element={<Album />} />
      </Route>
    </Routes>
  );
};

export default Routing;
*/