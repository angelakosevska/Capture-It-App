import { useState, useEffect, useContext } from "react";
import "./style.css";
import axios from "axios";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Feed() {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://capture-it.azurewebsites.net/api/event",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const publicEvents = response.data.data.filter(
          (event) => !event.isPrivate
        );
        setEvents(publicEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [authToken]);

  const handleViewMoreClick = (eventId) => {
    navigate(`event/${eventId}`);
  };

  return (
    <div className="feed">
      {events.map((event) => (
        <div key={event.eventId} className="event">
          <div className="profile">
            <img src={event.owner.profilePicture} alt="Profile" />
            <span>{event.owner.username}</span>
            <div
              className="event-name"
              onClick={() => handleViewMoreClick(event.eventId)}
            >
              {event.eventName}
            </div>
          </div>

          <div className="description">{event.description}</div>
          <div className="photos">
            {event.pictures.slice(0, 5).map((photo, index) => (
              <div key={index} className="photo-wrapper">
                <img
                  src={photo.imageUrl}
                  alt={`PhotoA ${index + 1}`}
                  className="photo"
                />
                {index === 4 && (
                  <div
                    className="view-more"
                    onClick={() => handleViewMoreClick(event.eventId)}
                  >
                    View more photos
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="actions">
            <LikeButton />
            <CommentButton />
            <ShareButton />
          </div>
        </div>
      ))}
    </div>
  );
}

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setPulsing(true);
    setTimeout(() => setPulsing(false), 200); // Remove pulsing class after animation duration
  };

  return (
    <div className={`ui-like ${pulsing ? "pulsing" : ""}`} onClick={toggleLike}>
      <i className={liked ? "bi bi-suit-heart-fill" : "bi bi-suit-heart"}></i>
    </div>
  );
}

function CommentButton() {
  return (
    <div className="ui-comment">
      <i className="bi bi-chat"></i>
    </div>
  );
}

function ShareButton() {
  return (
    <div className="ui-share">
      <i className="bi bi-share"></i>
    </div>
  );
}

export default Feed;
/*
const originalevents = [
    {
      id: 1,
      profilePic: "/Photos/profile1.jpg",
      profileName: "John Doe",
      eventName: "Event 1",
      description: "Description for event 1",
      photos: [
        "/Photos/photo1.jpg",
        "/Photos/photo2.jpg",
        "/Photos/photo3.jpg",
        "/Photos/photo4.jpg",
        "/Photos/photo5.jpg",
        "/Photos/photo6.jpg",
        "/Photos/photo7.jpg",
        "/Photos/photo8.jpg",
        "/Photos/photo9.jpg",
        "/Photos/photo10.jpg",
        "/Photos/photo11.jpg",
        "/Photos/photo12.jpg",
      ],
    },
    {
      id: 2,
      profilePic: "/Photos/profile2.jpg",
      profileName: "Jane Smith",
      eventName: "Event 2",
      description: "Description for event 2",
      photos: [
        "/Photos/photo1.jpg",
        "/Photos/photo2.jpg",
        "/Photos/photo3.jpg",
        "/Photos/photo4.jpg",
        "/Photos/photo5.jpg",
        "/Photos/photo6.jpg",
        "/Photos/photo7.jpg",
        "/Photos/photo8.jpg",
        "/Photos/photo9.jpg",
        "/Photos/photo10.jpg",
        "/Photos/photo11.jpg",
        "/Photos/photo12.jpg",
      ],
    },
  ];
*/
/*
 
  const additionaleventsCount = 6; // Number of additional events to create
  const additionalevents = [];

  for (let i = 0; i < additionaleventsCount; i++) {
    const originalevent = originalevents[i % originalevents.length];
    additionalevents.push({
      id: originalevents.length + i + 1,
      profilePic: originalevent.profilePic,
      profileName: originalevent.profileName,
      eventName: originalevent.eventName,
      description: originalevent.description,
      photos: shuffleArray(originalevent.photos),
    });
  }

  const events = [...originalevents, ...additionalevents];
*/
