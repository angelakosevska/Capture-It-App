import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "../../pages/HomePage/index.jsx";
import { Profile } from "../../pages/profile.jsx";
import { Album } from "../../pages/AlbumPage/index.jsx";
import { Event } from "../../pages/EventPage/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
import { useParams } from "react-router-dom";


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
        <Route path="/captureIt" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/album/:albumId" element={<Album />} />
      </Route>
    </Routes>
    </>
  );
};

export default Routing;
