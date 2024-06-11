import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Home } from "../../pages/HomePage/index.jsx";

import Profile from "../../pages/ProfilePage/index.jsx";
//import { Profile } from "../../pages/ProfilePage/index.jsx";
import { Album } from "../../pages/AlbumPage/index.jsx";
import { Event } from "../../pages/EventPage/index.jsx";
import Login from "../../pages/LogInPage/index.jsx";
import Register from "../../pages/RegisterPage/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "../Header/index.jsx";
import PageNotFound from "../PageNotFound/index.jsx";
import { AuthContext } from "../../context/index.jsx";
import { useContext } from "react";

const Routing = () => {
  const { authToken } = useContext(AuthContext);

  const PrivateRoute = ({ element, ...rest }) => {
    return authToken ? (
      <Route {...rest} element={element} />
    ) : (
      <>
        <Navigate to="/login" replace />
      </>
    );
  };

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
        <Route path="/login" element={<NoLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<NoLayout />}>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
