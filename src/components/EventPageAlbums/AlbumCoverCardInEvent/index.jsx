//vo eventot ima povekje albumi site se javni, na hover mozi da izlegva overlay koj go kreira albumot i ime na albumot
import { useState, useEffect, useContext } from "react";
import PictureAndUsername from "../../PictureAndUsername";
import "./style.css";
import axios from "axios";
import { AuthContext } from "../../../context/index";

const AlbumCoverCardInEvent = ({
  picWidth,
  picHeight,
  usernameCreator,
  albumName,
  profilePic,
  onClick,
  albumId,
}) => {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

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
            Authorization: `Bearer ${authToken}`,
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
                username={usernameCreator}
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
