import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Modalche from "../../components/Modals/PictureModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { redirect } from "react-router-dom";
import AddPhotoModal from "../../components//Modals/AddPhotoModal/index.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoBgButton from "../../components/Buttons/NoBGButton/index.jsx";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import EditAlbumModal from "../../components/Modals/EditAlbumModal/index.jsx";

export function Album() {
  const [pictures, setPictures] = useState({
    data: [],
    pageNumber: 0,
    pageSize: 0,
    totalRecords: 0,
  });
  const [error, setError] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editAlbumIsOpen, setEditAlbumIsOpen] = useState(false);
  const [selectedPictureIndex, setSelectedPictureIndex] = useState("");
  const [addPhotoM, setAddPhotoM] = useState(false);
  const { albumId } = useParams();

  const fetchPictureInAlbum = async () => {
    //gi zemame site sliki od getpicture
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/picture?createdAt=2024-05-05&albumId=${albumId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization:
              "Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzkzNTExNH0.Q4YIY-3zIwtv8Q8HK2LTc8WgzSEgxnDnZPTbD9bIuhM",
          },
        }
      );

      setPictures(result.data);
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

  const handleNext = () => {
    setSelectedPictureIndex(
      (prevIndex) => (prevIndex + 1) % pictures.data.length
    );
  };
  const handlePrev = () => {
    setSelectedPictureIndex(
      (prevIndex) =>
        (prevIndex - 1 + pictures.data.length) % pictures.data.length
    );
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
            Authorization:
              " Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzkzNTExNH0.Q4YIY-3zIwtv8Q8HK2LTc8WgzSEgxnDnZPTbD9bIuhM",
          },
        }
      );
    } catch (error) {
      setError(error);
      console.error("Error deleting album: ", error);
    }
  };

  return (
    <>
      <div className="breadCrumbs-counters">
        <Breadcrumbs albumId={albumId} />
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
      {addPhotoM && <AddPhotoModal onClose={addedPhoto} albumId={albumId} />}

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
          username={pictures.data[selectedPictureIndex].author.username}
        />
      )}
    </>
  );
}
export default Album;
