import "./style.css";
import AlbumsInEventSection from "../../components/EventPageAlbums/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import EventDescription from "../../components/EventHeader/EventDescription/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import SecondaryButton from "../../components/Buttons/SecondaryButton/index.jsx";
import SearchIcon from "@mui/icons-material/Search";

export function Event() {
  return (
    <>
      <div className="all-in-events">
        <main className="name-and-albums">
          <div className="eventHeader">
            <EventHeader />
            <PrimaryButton
              buttonWidth={"150px"}
              buttonHeight={"40px"}
              buttonText={"Invite People"}
            />
            <SecondaryButton
              buttonWidth={"150px"}
              buttonHeight={"40px"}
              buttonText={"Create Album"}
            />
            <SecondaryButton
              buttonHeight={"40px"}
              buttonWidth={"40px"}
              buttonIcon={<SearchIcon />}
            />
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
