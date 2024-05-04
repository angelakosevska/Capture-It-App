import { Link } from "react-router-dom";
import { Layout } from "../../UI/Layout.jsx";
import Like from "../../components/Like/index.jsx";

import "./style.css";
import LikeCommentSection from "../../components/LikeCommentSection/index.jsx";

import AlbumsInEventSection from "../../components/AlbumsInEventSection/index.jsx";

import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import EventLocation from "../../components/EventHeader/EventLocation/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";

export function Event() {
  return (
    <>
      <div className="pageContainer">
        <div className="gridContainer">
          <div className="eventHeader"><EventHeader/></div>
          <div className="description">
            1
            2
            3
          </div>
          <div className="buttons"><PrimaryButton buttonText="Like"/> </div>

          <div className="addAcomment"></div>
        </div>
      </div>
      <main className="AlbumAndComment">
        <div className="containerForPictures">
            <AlbumsInEventSection />

        </div>
        <div className="containerForCommentSection">
          <CommentsSection />
        </div>
      </main>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//search po ime
//da se bira cover photo so tochno odredeni dimenzii
