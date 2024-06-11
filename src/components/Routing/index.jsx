import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "../../pages/HomePage/index.jsx";
import { Profile } from "../../pages/ProfilePage/index.jsx";
import { Album } from "../../pages/AlbumPage/index.jsx";
import { Event } from "../../pages/EventPage/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
import Login from "../../pages/LogInPage/index.jsx";
import PageNotFound from "../PageNotFound/index.jsx";

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

  const NoLayout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route path="/album/:albumId" element={<Album />} />
        </Route>
        <Route path="/Login" element={<NoLayout />}>
          <Route path="/Login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
