import "./style.css";
import AlbumsInEventSection from "../../components/EventPageAlbums/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import CommentsSection from "../../components/CommentsSection/index.jsx";
import EventDescription from "../../components/EventHeader/EventDescription/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import SecondaryButton from "../../components/Buttons/SecondaryButton/index.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IconButton from "../../components/Buttons/IconButton/index.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchAlbums from "../../components/Search/SearchAlbum/index.jsx";
import CreateAlbumModal from "../../components/Modals/CreateAlbum/index.jsx";
import NoBgButton from "../../components/Buttons/NoBGButton/index.jsx";

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
  const [createAlbum, setCreateAlbum] = useState(false);

  const postAlbum = () => {
    setCreateAlbum(true);
  };
  const postedAlbum = () => {
    setCreateAlbum(false);
  };

  const fetchEventData = async () => {
    try {
      const result = await axios.get(
        //get eventby id
        `https://capture-it.azurewebsites.net/api/event/${eventId}`,
        {
          headers: {
            Authorization:
              " Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxNzkzMDU3NX0.d1Zjt72erpjY70vRq01FiaeY_tLcedLPFaDer0g6XX0",
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
  }, [eventId]);
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
            <div className="eventActions">
              <PrimaryButton
                buttonWidth={"auto"}
                buttonHeight={"40px"}
                buttonText={"Invite People"}
              />
              <SecondaryButton
                buttonWidth={"auto"}
                buttonHeight={"40px"}
                buttonText={"Create Album"}
                onClick={postAlbum}
              />
              <IconButton
                buttonIcon={<DeleteIcon />}
                buttonHeight={"40px"}
                buttonWidth={"40px"}
              />
              <SearchAlbums onSearch={setSearchTerm} />
            </div>
          </div>
        </div>
        <main className="albumsAndAside">
          <div className="containerForAlbums">
            <AlbumsInEventSection
              picEHeight={"225px"}
              picEWidth={"225px"}
              eventId={eventId}
              searchTerm={searchTerm}
            />
          </div>
          <aside className="likes-comments-description">
            <div className="event-description">
              <EventDescription eventDescription={eventData.description} />
            </div>
            <div className="buttonsEvent">
              <NoBgButton
                buttonText={"likes"}
                buttonHeight={"40px"}
                buttonWidth={"50%"}
              />
              <NoBgButton
                buttonText={` comments`}
                buttonHeight={"40px"}
                buttonWidth={"50%"}
              />
            </div>
            <div className="containerForCommentSection"></div>
          </aside>
        </main>
      </div>
      {createAlbum && (
        <CreateAlbumModal eventId={eventId} onClose={postedAlbum} />
      )}
    </>
  );
}
//soodvetna pateka do albumite
export default Event;

//search po ime
//da se bira cover photo so tochno odredeni dimenzii
