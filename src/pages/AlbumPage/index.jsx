import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Modalche from "../../components/Modals/PictureModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams, useNavigate } from "react-router-dom";
import AddPhotoModal from "../../components//Modals/AddPhotoModal/index.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoBgButton from "../../components/Buttons/NoBGButton/index.jsx";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import EditAlbumModal from "../../components/Modals/EditAlbumModal/index.jsx";
import { AuthContext } from "../../context/index.jsx";

export function Album() {
  const [pictures, setPictures] = useState({
    data: [],
    pageNumber: 0,
    pageSize: 0,
    totalRecords: 0,
  });
  const [commentsCount, setCommentsCount] = useState(0);

  const [comments, setComments] = useState({
    totalRecords: 1,
    pageNumber: 1,
    pageSize: 100,
    data: [],
  });
  const [error, setError] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editAlbumIsOpen, setEditAlbumIsOpen] = useState(false);
  const [selectedPictureIndex, setSelectedPictureIndex] = useState("");
  const [addPhotoM, setAddPhotoM] = useState(false);
  const { albumId } = useParams();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const navigate = useNavigate();

  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

  const fetchPictureInAlbum = async () => {
    //gi zemame site sliki od getpicture
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/picture?createdAt=2024-05-05&albumId=${albumId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setPictures(result?.data);

      console.log(" sliki", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching picturesinalbum: ", error);
    }
  };

  useEffect(() => {
    console.log("fetchPictureInAlbum");
    fetchPictureInAlbum();
  }, [albumId, pictures.totalRecords]);

  const fetchBreadcrumbs = async () => {
    //get albumById
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/album/${albumId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
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

  const fetchCommentsOnPicture = async () => {
    try {
      const result = await axios.get(
        //getcomments
        `https://capture-it.azurewebsites.net/api/comment?createdAt=2024-05-11&pictureId=${pictures?.data[selectedPictureIndex]?.pictureId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setCommentsCount(result?.data?.totalRecords);
      setComments(result.data.data);
      console?.log("comments dataget", result?.data?.data);
      console?.log("commcount", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching comment get data ", error);
    }
  };
  useEffect(() => {
    fetchCommentsOnPicture();
  }, []);
  const openModal = (index) => {
    setSelectedPictureIndex(index);
    setIsOpen(true);
  };
  const closeModal = () => {
    setSelectedPictureIndex(null);
    setIsOpen(false);
  };

  const addPhoto = () => {
    setAddPhotoM(true);
  };
  const addedPhoto = () => {
    setAddPhotoM(false);
  };

  const editAlbum = () => {
    setEditAlbumIsOpen(true);
  };
  const editedAlbum = () => {
    setEditAlbumIsOpen(false);
  };

  const handleNext = async () => {
    const nextIndex =
      (selectedPictureIndex + 1 + pictures.data.length) % pictures.data.length;
    setSelectedPictureIndex(nextIndex);
    const nextPictureId = pictures.data[nextIndex].pictureId;

    // Check if the next picture has comments
    const hasComments = pictures.data[nextIndex].commentCount > 0;

    if (hasComments) {
      await fetchCommentsOnPicture(nextPictureId);
    } else {
      // Reset comments if there are no comments for the next picture
      setCommentsCount(0);
      setComments({
        totalRecords: 0,
        pageNumber: 1,
        pageSize: 100,
        data: [],
      });
    }
  };

  const handlePrev = async () => {
    const prevIndex =
      (selectedPictureIndex - 1 + pictures.data.length) % pictures.data.length;
    setSelectedPictureIndex(prevIndex);
    const prevPictureId = pictures.data[prevIndex].pictureId;

    // Check if the previous picture has comments
    const hasComments = pictures.data[prevIndex].commentCount > 0;

    if (hasComments) {
      await fetchCommentsOnPicture(prevPictureId);
    } else {
      // Reset comments if there are no comments for the previous picture
      setCommentsCount(0);
      setComments({
        totalRecords: 0,
        pageNumber: 1,
        pageSize: 100,
        data: [],
      });
    }
  };

  const deleteAlbum = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this album?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        //delete album
        `https://capture-it.azurewebsites.net/api/album/${albumId}`,
        {
          headers: {
            Authorization: ` Bearer   ${authToken}`,
          },
        }
      );
      navigate(`/event/${breadcrumbs.eventId}`);
    } catch (error) {
      setError(error);
      console.error("Error deleting album: ", error);
    }
  };

  return (
    <>
      <div className="breadCrumbs-counters">
        <Breadcrumbs albumId={albumId} breadcrumbs={breadcrumbs} />
        <div className="albumButtons">
          <div className="dropdown-more">
            <NoBgButton
              buttonIcon={<MoreVertIcon fontSize="large" />}
              className="dropbtn"
            />
            <div className="dropdown-content-more">
              <NoBgButton
                onClick={addPhoto}
                buttonIcon={<AddAPhotoIcon />}
                buttonHeight={"40px"}
                buttonText={"Add photo"}
              />
              <NoBgButton
                buttonIcon={<DeleteIcon />}
                buttonText={"Delete album"}
                buttonHeight={"40px"}
                onClick={deleteAlbum}
              />
              <NoBgButton
                buttonText={"Edit album"}
                buttonIcon={<EditIcon />}
                onClick={editAlbum}
              />
            </div>
          </div>
        </div>
      </div>
      {editAlbumIsOpen && <EditAlbumModal onClose={editedAlbum} />}

      <div className="all-in-albums">
        <div className="containerForPictures">
          {pictures.data.map((item, index) => (
            <PicturesInAlbumSection
              picEHeight={"300px"}
              picEWidth={"225px"}
              picture={item.imageUrl}
              username={item.author.username}
              profilePic={item.author.profilePicture}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      {addPhotoM && (
        <AddPhotoModal
          onClose={addedPhoto}
          albumId={albumId}
          fetchPictureInAlbum={fetchPictureInAlbum}
          fetchCommentsOnPicture={fetchCommentsOnPicture}
        />
      )}

      {modalIsOpen && selectedPictureIndex !== null && (
        <Modalche
          imageUrl={pictures.data[selectedPictureIndex].imageUrl}
          picDescription={pictures.data[selectedPictureIndex].description}
          onClose={closeModal}
          commCount={pictures.data[selectedPictureIndex].commentCount}
          onNext={handleNext}
          onPrev={handlePrev}
          pictureId={pictures.data[selectedPictureIndex].pictureId}
          fetchPicture={fetchPictureInAlbum}
          profilePicture={
            pictures.data[selectedPictureIndex].author.profilePicture
          }
          usernameCreator={pictures.data[selectedPictureIndex].author.username}
          albumId={albumId}
          comments={comments}
          commentsCount={commentsCount}
          fetchCommentsOnPicture={fetchCommentsOnPicture}
        />
      )}
    </>
  );
}
export default Album;
