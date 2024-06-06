import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "../../pages/HomePage/index.jsx";
import { Profile } from "../../pages/profile.jsx";
import { Album } from "../../pages/AlbumPage/index.jsx";
import { Event } from "../../pages/EventPage/index.jsx";
import Login from "../../pages/LogInPage/index.jsx";
import Register from "../../pages/RegisterPage/index.jsx"
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const NoLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event" element={<Event />} />
          <Route path="/album" element={<Album />} />
        </Route>
        <Route path="/login" element={<NoLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<NoLayout />}>
          <Route path="/register" element={<Register />}>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
