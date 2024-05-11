import "./style.css";
import AlbumsInEventSection from "../../components/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import EventDescription from "../../components/EventHeader/EventDescription/index.jsx";

export function Event() {
  return (
    <>
      <div className="all-in-events">
        <main className="name-and-events">
          <div className="eventHeader">
            <EventHeader />
          </div>
          <div className="containerForPictures">
            <AlbumsInEventSection 
            picEHeight={"225px"}
            picEWidth={"225px"}/>
          </div>
        </main>

        <aside className="likes-comments-description">
          <div className="event-description">
            <EventDescription />
          </div>
          <div className="counters">
            <div className="like-counter counter"> 22 likes</div>
            <div className="comment-counter counter">15 comments</div>
          </div>
          <div className="containerForCommentSection">
            <CommentsSection />
          </div>
        </aside>

        <div className="AlbumAndComment">
          <div className="buttons-and-albums"></div>
        </div>
      </div>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//search po ime
//da se bira cover photo so tochno odredeni dimenzii
