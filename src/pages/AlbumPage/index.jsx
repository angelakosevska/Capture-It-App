import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Modalche from "../../components/PictureModal/index.jsx";
import Modal from "react-modal";

import { useParams } from "react-router-dom";

export function Album() {
  const [pictures, setPictures] = useState({
    data: [],
    pageNumber: 0,
    pageSize: 0,
    totalRecords: 0,
  });
  const [error, setError] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState("");
  const [selectedPictureIndex, setSelectedPictureIndex] = useState("");

  const { albumId } = useParams();
  console.log("albumid", albumId);
  //vo album/id kje se site sliki
  const fetchPictureInAlbum = async () => {
    //gi zemame site sliki od getpicture
    try {
      const result = await axios.get(
        `https://captureit.azurewebsites.net/api/picture?createdAt=2024-05-05&albumId=${albumId}&pageNumber=1&pageSize=2`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNzE2OTUxNX0.Hyy_n8jwKtgCkYkIXknXBqoMmE9MsOi_WQqJaWg6rQI",
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

        <div>
          <PrimaryButton
            buttonWidth={"150px"}
            buttonHeight={"40px"}
            buttonText={"Invite People"}
          />
        </div>
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
