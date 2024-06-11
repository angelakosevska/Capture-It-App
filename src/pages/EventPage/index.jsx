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
import EditIcon from "@mui/icons-material/Edit";
import EditEventModal from "../../components/Modals/EditEventModal/index.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoBgButton from "../../components/Buttons/NoBGButton/index.jsx";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import InviteParticipantsModal from "../../components/Modals/InviteParticipantsModal/index.jsx";
import PictureAndUsername from "../../components/PictureAndUsername/index.jsx";

export function Event() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [createAlbum, setCreateAlbum] = useState(false);
  const [invitePeople, setInvitePeople] = useState(false);
  const [eventParticipants, setEventParticipants] = useState([]);
  const [creator, setCreator] = useState("");
  const [user, setUser] = useState("");
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

  const fetchUserById = async () => {
    try {
      const result = await axios.get(
        //get user by id hardkodiram
        `https://capture-it.azurewebsites.net/api/user/11`,
        {
          headers: {
            Authorization:
              " Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODA3MjUwOX0.IvJinZZTobJi7UvdvwHhg2rylOBhPOO2ZpJEFRAc8aE",
          },
        }
      );

      setUser(result.data.username);
      console?.log("logiran e userot: ", result.data.username);
    } catch (error) {
      setError(error);
      console.error("error fetching username: ", error);
    }
  };
  useEffect(() => {
    fetchUserById();
  }, []);

  const fetchEventData = async () => {
    try {
      const result = await axios.get(
        //get eventby id
        `https://capture-it.azurewebsites.net/api/event/${eventId}`,
        {
          headers: {
            Authorization:
              " Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODA3MjUwOX0.IvJinZZTobJi7UvdvwHhg2rylOBhPOO2ZpJEFRAc8aE",
          },
        }
      );

      setEventIsPrivate(result.data.isPrivate);
      setCreator(result.data.owner.username);
      setEventData(result?.data);
      console?.log("event data", result.data);
      console.log(" event is ", result.data.isPrivate);

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
            Authorization:
              " Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODA3MjUwOX0.IvJinZZTobJi7UvdvwHhg2rylOBhPOO2ZpJEFRAc8aE",
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
            Authorization:
              " Bearer  eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia29zZXZza2FhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMSIsImV4cCI6MTcxODA3MjUwOX0.IvJinZZTobJi7UvdvwHhg2rylOBhPOO2ZpJEFRAc8aE",
          },
        }
      );
    } catch (error) {
      setError(error);
      console.error("Error deleting event: ", error);
    }
  };
  const userIsParticipant = eventParticipants.some(
    (participant) => participant.userId === 11
  );

  return (
    //logiraniot userId
    <>
      {eventIsPrivate &&
      !eventParticipants.some((participant) => participant.userId === 11) ? (
        <div className="eventPrivate">This event is private</div>
      ) : (
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
            {user === creator ? (
              <>
                {invitePeople && (
                  <InviteParticipantsModal
                    onClose={invitedPeopleInEvent}
                    eventId={eventId}
                    fetchParticipants={fetchParticipants}
                  />
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
              <SecondaryButton
                buttonWidth={"auto"}
                buttonHeight={"40px"}
                buttonText={"Create Album"}
                buttonIcon={<PhotoAlbumIcon />}
                onClick={postAlbum}
              />
            )}

            {/* <div className="dropdown-more">
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
                {user === creator && (
                  <NoBgButton
                    buttonIcon={<DeleteIcon />}
                    buttonText={"Delete Event"}
                    buttonHeight={"40px"}
                    buttonWidth={"auto"}
                    onClick={deleteEvent}
                  />
                )}
                {user === creator && (
                  <NoBgButton
                    buttonIcon={<EditIcon />}
                    buttonText={"Edit event info"}
                    buttonHeight={"40px"}
                    buttonWidth={"auto"}
                    onClick={editEvent}
                  />
                )}
              </div>
            </div> */}

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
            {createAlbum && userIsParticipant && (
              <CreateAlbumModal eventId={eventId} onClose={postedAlbum} />
            )}

            <div className="invitePeople">
              <div className="labelInvitePeople">People in this event:</div>
              {eventParticipants.map((participant) => (
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
      )}
    </>
  );
}

export default Event;
