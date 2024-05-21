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

export function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventUsername, setEventUsername] = useState("");
  const [eventProfilePic, setEventProfilePic] = useState("");
  const [eventID, setEventId] = useState("");
const[albums, setAlbums]=useState([]);

  const fetchEventAlbums = () => {
    try {
      const res = axios.get(
        `https://captureit.azurewebsites.net/api/album?createdAt=2024-05-11&eventId=22`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMCIsImV4cCI6MTcxNjMxMjA4Mn0.A962dK8XbLpnMzXUsnSDN7v_PaQdsLQBW7Rhf83uHLY",
              
          },
        }
      ).then((res)=>{
        console.log(res.data);
      })
    

      // setEventLocation(response.data.location);
      // setEventUsername(response.data.username);
      // setEventProfilePic(response.data.eventProfilePic);
      /*
        setEventLocation(response.data.location);
      setEventUsername(response.data.username);
      setEventProfilePic(response.data.eventProfilePic);
      setEventId(response.data.eventId);*/
    } catch (error) {
      console.error("error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchEventAlbums();
  }, []);

  return (
    <>
    <div> {albums}</div>
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
