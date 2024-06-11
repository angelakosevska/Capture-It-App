import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import PictureAndUsername from "../PictureAndUsername";
import { useState, useEffect } from "react";
import axios from "axios";

const BreadCrumbs = ({ albumId }) => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const navigate = useNavigate();
  const fetchBreadcrumbs = async () => {
    //get albumById
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/album/${albumId}`,
        {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODA2ODgxMH0.bA71w19D3B7X8NaPteHk0oNzAH2Xzt0dmgLx8xmekDY",
          },
        }
      );

      setBreadcrumbs(result.data);
      console?.log(" data for breadcrumbs albumby id data", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching data for breadcrumbs: ", error);
    }
  };

  useEffect(() => {
    fetchBreadcrumbs();
  }, [albumId]);

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
