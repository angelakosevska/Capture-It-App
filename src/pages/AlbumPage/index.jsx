import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Modalche from "../../components/PictureModal/index.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import SecondaryButton from "../../components/Buttons/SecondaryButton/index.jsx";
import IconButton from "../../components/Buttons/IconButton/index.jsx";
import AddPhotoModal from "../../components/AddPhotoModal/index.jsx";

export function Album() {
  const [pictures, setPictures] = useState({
    data: [],
    pageNumber: 0,
    pageSize: 0,
    totalRecords: 0,
  });
  const [error, setError] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPictureIndex, setSelectedPictureIndex] = useState("");
  const [addPhotoM, setAddPhotoM] = useState(false);
  const { albumId } = useParams();
  console.log("albumid", albumId);
  //vo album/id kje se site sliki
  const fetchPictureInAlbum = async () => {
    //gi zemame site sliki od getpicture
    try {
      const result = await axios.get(
        `https://captureit.azurewebsites.net/api/picture?&albumId=${albumId}&pageNumber=1&pageSize=100`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNzI0OTk2NX0.V8KAfkJRWbLNrBTX_ufVZYgUriTTskxMgjuFbLfkfPk",
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
  }, [albumId]);

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
  // console.log("TEST", pictures?.data);
  return (
    <>
      <div className="breadCrumbs-counters">
        <div className="BreadC-position">
          <Breadcrumbs />
        </div>

        <SecondaryButton
          onClick={addPhoto}
          buttonHeight={"40px"}
          buttonText={"Add photo"}
        />

        <IconButton buttonIcon={<DeleteIcon />} buttonHeight={"40px"} />
      </div>

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
      {addPhotoM && <AddPhotoModal onClose={addedPhoto} />}

      {modalIsOpen && selectedPictureIndex !== null && (
        <Modalche
          // imageUrl={selectedPicture.imageUrl}
          // picDescription={selectedPicture.description}
          // onClose={closeModal}
          // commCount={selectedPicture.commentCount}
          imageUrl={pictures.data[selectedPictureIndex].imageUrl}
          picDescription={pictures.data[selectedPictureIndex].description}
          onClose={closeModal}
          commCount={pictures.data[selectedPictureIndex].commentCount}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}
export default Album;
