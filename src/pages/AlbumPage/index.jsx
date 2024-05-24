import "./style.css";
import Breadcrumbs from "../../components/BreadCrumbs/index.jsx";
import PicturesInAlbumSection from "../../components/AlbumPagePictures/PicturesInAlbumSection/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Modalche from "../../components/Modal/index.jsx";
import Modal from "react-modal";

export function Album() {
  const [pictures, setPictures] = useState([]);
  const [korisnici, setKorisnici] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  //vo album/id kje se site sliki
  const fetchPictureInAlbum = async () => {
    try {
      const res = await axios
        .get(`https://example-data.draftbit.com/books?_limit=10`)
        .then((res) => {
          setPictures(res.data);
          console.log(res.data);
        });
    } catch (error) {
      setError(error);
      <h1>error </h1>;
      console.error("error fetching data: ", error);
    }
  };

  const fetchUsername = async () => {
    try {
      const result = await axios
        .get(`https://example-data.draftbit.com/users?_limit=10`)
        .then((result) => {
          setKorisnici(result.data);
          // console.log(result.data);
        });
    } catch (error) {
      setError(error);
      <h1>error </h1>;
      console.error("error fetching data: ", error);
    }
  };

  const mergeData = (pictures, korisnici) => {
    return pictures.map((picture) => {
      const korisnik = korisnici.find((korisnik) => korisnik.id === picture.id);
      return korisnik ? { ...picture, username: korisnik.username } : picture;
    });
  };

  useEffect(() => {
    const merged = mergeData(pictures, korisnici);
    setMergedData(merged);
    console.log(merged);
  }, [pictures, korisnici]);
  useEffect(() => {
    fetchPictureInAlbum();
  }, []);
  useEffect(() => {
    fetchUsername();
  }, []);

  const openModal = (pic) => {
    setSelectedPicture(pic);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPicture(null);
    setIsOpen(false);
  };

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
          {mergedData.map((item) => (
            <PicturesInAlbumSection
              picEHeight={"300px"}
              picEWidth={"225px"}
              slikaA={item.image_url}
              username={item.username}
              imageUrl={item.avatar}
              onClick={() => openModal(item.image_url)}
            />
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <Modalche imageUrl={selectedPicture} onClose={closeModal} />
      )}
    </>
  );
}
export default Album;
//od slikite se ukluchva slika so komentarite
/*
,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNjM4NzExN30.tbAMHpUlyDX5YKTl3aJXULUdvHQayaxYQXnss7qz--k",
            },
          }

           <div className="counters">
          <div className="like-counter counter"> 22 likes</div>
          <div className="comment-counter counter">15 comments</div>
        </div>
          */
/*
const mergedData = korisnik.reduce((accumulator, item2)=>{
  if(!accumulator.some(item1=> item1.id === item2.id)){
    accumulator.push(item2);
  }
  return accumulator;
}, korisnik);
console.log(mergedData);

*/
