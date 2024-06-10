//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import { useState, useEffect } from "react";
import CoverAlbum from "../../CoverAlbum";
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";
import axios from "axios";

const AlbumCoverCardInEvent = ({
  picWidth,
  picHeight,
  username,
  albumName,
  profilePic,
  onClick,
  albumId,
}) => {
  const [picAlbum, setPicAlbum] = useState({
    totalRecords: 0,
    pageNumber: 0,
    pageSize: 0,
    data: [],
  });
  const [error, setError] = useState([]);
  const defaultCoverImage =
    process.env.PUBLIC_URL + "/defaultCoverAlbumPhoto/default.jpg";
  const fetchAlbumCoverCardInEvent = async () => {
    //get picture
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/picture?createdAt=2024-05-05&albumId=${albumId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODAzODMwN30.yQ4gIb9aTbUqsDzYr3nYlyCZsRaGqfvbjBYTtDorNRk",
          },
        }
      );
      const pictureRandom = result.data.data;

      if (pictureRandom && pictureRandom.length > 0) {
        const randomIndex = Math.floor(Math.random() * pictureRandom.length);
        setPicAlbum(pictureRandom[randomIndex].imageUrl);
      } else {
        setPicAlbum(defaultCoverImage);
      }

      console.log("picCover ", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching picture cover: ", error);
      setPicAlbum(defaultCoverImage);
    }
  };

  useEffect(() => {
    fetchAlbumCoverCardInEvent();
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ width: picWidth, height: picHeight }}
        onClick={onClick}
      >
        <div className="overlay">
          <img src={picAlbum} className="coverImage" />
          <div className="PandU">
            <div className="album-name-event">
              <PictureAndUsername
                textColor={"var(--secondaryColor)"}
                ppDimension={"30px"}
                username={username}
                profilePic={profilePic}
              />
              {albumName}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlbumCoverCardInEvent;
/* ovde e izgledo na edna cover slika  */
