import "./style.css";
import AlbumsInEventSection from "../../components/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";

export function Event() {
  return (
    <>
     
        <div className="eventHeader">
          <EventHeader />
        </div>
   

      <div className="AlbumAndComment">
        <div className="buttons-and-albums">
          <div className="buttons">
            <PrimaryButton buttonText="Like" />
            <PrimaryButton buttonText="Comments 2" />
          </div>
          <div className="containerForPictures">
            <AlbumsInEventSection />
          </div>
        </div>
        <div className="containerForCommentSection">
          <CommentsSection />
        </div>
      </div>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//search po ime
//da se bira cover photo so tochno odredeni dimenzii
