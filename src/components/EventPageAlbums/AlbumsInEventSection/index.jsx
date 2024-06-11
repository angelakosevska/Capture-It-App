import axios from "axios";
import AlbumCoverCardInEvent from "../AlbumCoverCardInEvent";
import "./style.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchAlbums from "../../Search/SearchAlbum";
import { AuthContext } from "../../../context";

const AlbumsInEventSection = ({
  picEWidth,
  picEHeight,
  eventId,
  searchTerm,
}) => {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const [error, setError] = useState([]);
  const [albums, setAlbums] = useState({
    data: [],
    pageNumber: 0,
    pageSize: 0,
    totalRecords: 0,
  });
  const navigate = useNavigate();

  const fetchAlbumsInEvent = async () => {
    //get album?
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/album?createdAt=2024-05-11&eventId=${eventId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization: ` Bearer  ${authToken}`,
          },
        }
      );

      setAlbums(result.data);
      console.log("albumi ", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchAlbumsInEvent();
  }, []);

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  const filterAlbums = (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === " ") {
      return albums.data; // No filtering if search term is empty
    }
    const searchTerms = searchTerm
      .split(" ")
      .filter((term) => term.trim() !== " ");
    return albums.data.filter((album) => {
      const albumNameLower = album.albumName?.toLowerCase();
      const creatorLower = album.creator?.username?.toLowerCase();
      return searchTerms.some(
        (term) =>
          (albumNameLower && albumNameLower.includes(term)) ||
          (creatorLower && creatorLower.includes(term))
      );
    });
  };

  const filteredAlbums = filterAlbums(searchTerm);

  // Pass filtered albums to parent for rendering (optional)

  return (
    <>
      {filteredAlbums.map((album) => (
        <AlbumCoverCardInEvent
          key={album.albumId}
          altText={album.alt}
          picWidth={picEWidth}
          picHeight={picEHeight}
          usernameCreator={album.creator.username}
          profilePic={album.creator.profilePicture}
          albumName={album.albumName}
          onClick={() => {
            handleAlbumClick(album.albumId);
          }}
          albumId={album.albumId}
        />
      ))}
    </>
  );
};

export default AlbumsInEventSection;
/* ovde samo se povikva durgata komponenta za da se prikazat albumite */
