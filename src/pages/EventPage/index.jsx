import "./style.css";
import AlbumsInEventSection from "../../components/EventPageAlbums/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import EventDescription from "../../components/EventHeader/EventDescription/index.jsx";

export function Event() {
  return (
    <>
      <div className="all-in-events">
        <main className="name-and-albums">
          <div className="eventHeader">
            <EventHeader />
          </div>
          <div className="containerForAlbums">
            <AlbumsInEventSection picEHeight={"225px"} picEWidth={"225px"} />
          </div>
        </main>

        <aside className="likes-comments-description">
          <div className="event-description">
            <EventDescription />
          </div>
          <div className="counters-inEvent">
            <div className="like-counter counter-event"> 22 likes</div>
            <div className="comment-counter counter-event">15 comments</div>
          </div>
          <div className="containerForCommentSection">
            <CommentsSection />
          </div>
        </aside>
      </div>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//search po ime
//da se bira cover photo so tochno odredeni dimenzii
