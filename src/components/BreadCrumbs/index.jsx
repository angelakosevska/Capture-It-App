import { Link, useLocation } from "react-router-dom";
import "./style.css";
import PictureAndUsername from "../PictureAndUsername";

const BreadCrumbs = () => {
  const location = useLocation();

  return (
    <div className="breadCrumbsContainer">
      {/*<div className="breadcrumb-div">
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
      </div> */}
      
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
          <PictureAndUsername/>
        </Link>
      </div>
    </div>
  );
}

export default BreadCrumbs;
