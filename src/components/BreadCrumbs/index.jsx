import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import PictureAndUsername from "../PictureAndUsername";
import { useState } from "react";

const BreadCrumbs = ({ albumId, breadcrumbs }) => {
  const location = useLocation();
  const [error, setError] = useState(null);
  // const [breadcrumbs, setBreadcrumbs] = useState([]);
  const navigate = useNavigate();

  const handleBreadcrumbEvent = () => {
    navigate(`/event/${breadcrumbs.eventId}`);
  };
  const handleBreadcrumbAlbum = () => {
    navigate(`/album/${breadcrumbs.albumId}`);
  };
  const handleBreadcrumbUser = () => {
    navigate(`/${breadcrumbs.creator.username}`);
  };
  return (
    <div className="breadCrumbsContainer">
      <div className="breadcrumb-div" onClick={handleBreadcrumbEvent}>
        {breadcrumbs.event?.eventName}
      </div>
      <div className="breadcrumb-div" onClick={handleBreadcrumbAlbum}>
        {breadcrumbs.albumName}
      </div>
      <div className="breadcrumb-div" onClick={handleBreadcrumbUser}>
        <PictureAndUsername
          ppDimension={"30px"}
          username={breadcrumbs.creator?.username}
          profilePic={breadcrumbs.creator?.profilePicture}
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;
