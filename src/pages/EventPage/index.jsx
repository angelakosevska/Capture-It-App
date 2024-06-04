import "./style.css";
import AlbumsInEventSection from "../../components/EventPageAlbums/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import EventDescription from "../../components/EventHeader/EventDescription/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import SecondaryButton from "../../components/Buttons/SecondaryButton/index.jsx";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IconButton from "../../components/Buttons/IconButton/index.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchAlbums from "../../components/Search/SearchAlbum/index.jsx";

export function Event() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({
    data: [],
    pageNumber: 0,
    pageSize: 0,
    totalRecords: 0,
  });
  const [error, setError] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEventData = async () => {
    try {
      const result = await axios.get(
        //get eventby id
        `https://capture-it.azurewebsites.net/api/event/${eventId}`,
        {
          headers: {
            Authorization:
              " eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzU0NDY3M30.eNBkE8cUYRtv-AUNPHNlaooEvKPm9OJaDI4_B-AtDFQ",
          },
        }
      );

      setEventData(result?.data);
      console?.log("event data", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchEventData();
  }, []);
  return (
    <>
      <div className="all-in-events">
        <div className="name-and-search">
          <div className="eventHeader">
            <EventHeader
              location={eventData.location}
              profilePicture={eventData?.owner?.profilePicture}
              username={eventData?.owner?.username}
              eventName={eventData.eventName}
            />
            <PrimaryButton
              buttonWidth={"auto"}
              buttonHeight={"40px"}
              buttonText={"Invite People"}
            />
            <SecondaryButton
              buttonWidth={"auto"}
              buttonHeight={"40px"}
              buttonText={"Create Album"}
            />
            <IconButton
              buttonIcon={<DeleteIcon />}
              buttonHeight={"40px"}
              buttonWidth={"40px"}
            />
            <SearchAlbums onSearch={setSearchTerm} />
          </div>
        </div>
        <main className="albumsAndAside">
          <div className="containerForAlbums">
            <AlbumsInEventSection
              picEHeight={"100px"}
              picEWidth={"225px"}
              eventId={eventId}
              searchTerm={searchTerm}
            />
          </div>
          <aside className="likes-comments-description">
            <div className="event-description">
              <EventDescription eventDescription={eventData.description} />
            </div>
            <div className="counters-inEvent">
              <div className="like-counter counter-event">0 likes</div>
              <div className="comment-counter counter-event">15 comments</div>
            </div>
            <div className="containerForCommentSection">
              <CommentsSection />
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//search po ime
//da se bira cover photo so tochno odredeni dimenzii
