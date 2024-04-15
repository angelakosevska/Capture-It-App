import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.css";
import PPandUN from "../PPandUN/PPandUN";

function Breadcrumbs() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="breadcrumb-div">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Home
        </Link>
      </div>
      <div className="breadcrumb-div">
        <Link
          to="/event"
          className={
            location.pathname.startsWith("/event")
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Event name
        </Link>
      </div>
      <div className="breadcrumb-div">
        <Link
          to="/album"
          className={
            location.pathname === "/album"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Album Name
        </Link>
      </div>
      <div className="breadcrumb-div">
        <Link
          to="/profile"
          className={
            location.pathname === "/profile"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          <PPandUN />
        </Link>
      </div>
    </div>
  );
}

export default Breadcrumbs;
