import "./style.css";
import AlbumsInEventSection from "../../components/EventPageAlbums/AlbumsInEventSection/index.jsx";
import EventHeader from "../../components/EventHeader/index.jsx";
import EventDescription from "../../components/EventHeader/EventDescription/index.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton/index.jsx";
import SecondaryButton from "../../components/Buttons/SecondaryButton/index.jsx";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchAlbums from "../../components/Search/SearchAlbum/index.jsx";
import CreateAlbumModal from "../../components/Modals/CreateAlbum/index.jsx";
import EditIcon from "@mui/icons-material/Edit";
import EditEventModal from "../../components/Modals/EditEventModal/index.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoBgButton from "../../components/Buttons/NoBGButton/index.jsx";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import InviteParticipantsModal from "../../components/Modals/InviteParticipantsModal/index.jsx";
import PictureAndUsername from "../../components/PictureAndUsername/index.jsx";
import { AuthContext } from "../../context/index.jsx";

export function Event() {
  const { eventId } = useParams();
  //context
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

  const [eventData, setEventData] = useState({});
  const [error, setError] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [createAlbum, setCreateAlbum] = useState(false);
  const [invitePeople, setInvitePeople] = useState(false);
  const [eventParticipants, setEventParticipants] = useState([]);
  const [creator, setCreator] = useState("");
  const [publicUser, setPublicUser] = useState();
  //const [user, setUser] = useState("");
  const [eventIsPrivate, setEventIsPrivate] = useState(true);

  const invitePeopleInEvent = () => {
    setInvitePeople(true);
  };
  const invitedPeopleInEvent = () => {
    setInvitePeople(false);
  };

  const postAlbum = () => {
    setCreateAlbum(true);
  };
  const postedAlbum = () => {
    setCreateAlbum(false);
  };
  const [editEventIsOpen, setEditEventIsopen] = useState(false);

  const editEvent = () => {
    setEditEventIsopen(true);
  };

  const editedEvent = () => {
    setEditEventIsopen(false);
  };

  const fetchEventData = async () => {
    try {
      const result = await axios.get(
        //get eventby id
        `https://capture-it.azurewebsites.net/api/event/${eventId}`,
        {
          headers: {
            Authorization: ` Bearer  ${authToken}`,
          },
        }
      );

      setEventIsPrivate(result.data.isPrivate);
      setCreator(result.data?.owner?.username);
      setEventData(result?.data);
      console?.log("event data", result.data);
      console.log(" event is private ", result.data.isPrivate);
      console.log("creator ", result.data?.owner?.username);

      // setEventParticipants([result.data?.owner, ...result.data.participants]);
    } catch (error) {
      setError(error);
      console.error("error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchEventData();
  }, [eventId]);




  const fetchParticipants = async () => {
    try {
      const result = await axios.get(
        //get participants
        `https://capture-it.azurewebsites.net/api/event/${eventId}/participants`,
        {
          headers: {
            Authorization: ` Bearer  ${authToken}`,
          },
        }
      );
      setEventParticipants(result.data.participants);
      console?.log("event participants", result.data.participants);
    } catch (error) {
      setError(error);
      console.error("error fetching participants: ", error);
    }
  };
  useEffect(() => {
    fetchParticipants();
  }, [eventId]);

  const deleteEvent = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        //delete album
        `https://capture-it.azurewebsites.net/api/event/${eventId}`,
        {
          headers: {
            Authorization: ` Bearer  ${authToken}`,
          },
        }
      );
    } catch (error) {
      setError(error);
      console.error("Error deleting event: ", error);
    }
  };

  return (
    //logiraniot userId
    <>
      {/* <div className="eventPrivate">This event is private</div> */}
      <div className="all-in-events">
        <div className="eventHeader">
          <EventHeader
            location={eventData.location}
            profilePicture={eventData?.owner?.profilePicture}
            username={eventData?.owner?.username}
            eventName={eventData.eventName}
            startDate={eventData.startDateTime}
            endDate={eventData.endDateTime}
          />
        </div>
        <div className="eventActions">
          <SearchAlbums onSearch={setSearchTerm} />

          {username === creator ? (
            <>
              {invitePeople && (
                <InviteParticipantsModal
                  onClose={invitedPeopleInEvent}
                  eventId={eventId}
                  fetchParticipants={fetchParticipants}
                />
              )}
              {createAlbum && (
                <CreateAlbumModal eventId={eventId} onClose={postedAlbum} />
              )}
              <PrimaryButton
                buttonWidth={"auto"}
                buttonHeight={"40px"}
                buttonText={"Invite People"}
                onClick={invitePeopleInEvent}
              />
              <div className="dropdown-more">
                <NoBgButton
                  buttonIcon={<MoreVertIcon fontSize="large" />}
                  className="dropbtn"
                />
                <div className="dropdown-content-more">
                  <NoBgButton
                    buttonWidth={"auto"}
                    buttonHeight={"40px"}
                    buttonText={"Create Album"}
                    buttonIcon={<PhotoAlbumIcon />}
                    onClick={postAlbum}
                  />

                  <NoBgButton
                    buttonIcon={<DeleteIcon />}
                    buttonText={"Delete Event"}
                    buttonHeight={"40px"}
                    buttonWidth={"auto"}
                    onClick={deleteEvent}
                  />
                  <NoBgButton
                    buttonIcon={<EditIcon />}
                    buttonText={"Edit event info"}
                    buttonHeight={"40px"}
                    buttonWidth={"auto"}
                    onClick={editEvent}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {createAlbum && (
                <CreateAlbumModal eventId={eventId} onClose={postedAlbum} />
              )}
              <SecondaryButton
                buttonWidth={"auto"}
                buttonHeight={"40px"}
                buttonText={"Create Album"}
                buttonIcon={<PhotoAlbumIcon />}
                onClick={postAlbum}
              />
            </>
          )}

          {editEventIsOpen && <EditEventModal onClose={editedEvent} />}
        </div>
        <div className="mainAndInvite">
          <div className="descriptionAndEvent">
            <div className="event-description">
              <EventDescription eventDescription={eventData.description} />
            </div>
            <main className="albumsInEvent">
              <AlbumsInEventSection
                picEHeight={"225px"}
                picEWidth={"225px"}
                eventId={eventId}
                searchTerm={searchTerm}
              />
            </main>
          </div>

          <div className="invitePeople">
            <div className="labelInvitePeople">People in this event:</div>
            {Array.isArray(eventParticipants) &&
              eventParticipants.map((participant) => (
                <div key={participant.id} className="participantMap">
                  <PictureAndUsername
                    profilePic={participant?.profilePicture}
                    username={participant.username}
                    ppDimension={"25px"}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
