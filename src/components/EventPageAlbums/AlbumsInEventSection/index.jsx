import axios from "axios";
import AlbumCoverCardInEvent from "../AlbumCoverCardInEvent";

import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AlbumsInEventSection = ({ picEWidth, picEHeight, eventId }) => {
  //tuka da get album i kje gi imam site
  const [error, setError] = useState([]);
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  const fetchAlbumsInEvent = async () => {
    //const {eventId}= useParams;
    try {
      const res = await axios
        .get(
          `https://captureit.azurewebsites.net/api/album?createdAt=2024-05-11&eventId=${eventId}`,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNzAwMjM2MX0.BTHXpMZXwgbNjqYnBfrafF0_Iap8Vt66c-2DkNXCVT0",
            },
          }
        )
        .then((res) => {
          setAlbums(res.data);
          console.log(res.data);
        });
    } catch (error) {
      setError(error);
      <h1>error</h1>;
      console.error("error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchAlbumsInEvent();
  }, []);

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  return (
    <>
      {albums.map((album) => (
        <AlbumCoverCardInEvent
          //imageUrl={album.src}
          altText={album.alt}
          picWidth={picEWidth}
          picHeight={picEHeight}
          username={album.creator.username}
          profilePic={album.creator.profilePicture}
          albumName={album.albumName}
          onClick={() => {handleAlbumClick(album.albumId)}}
        />
      ))}
    </>
  );
};

export default AlbumsInEventSection;
/* ovde samo se povikva durgata komponenta za da se prikazat albumite */
