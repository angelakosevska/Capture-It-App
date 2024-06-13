import { AuthContext } from "../../context/index.jsx";
import { useEffect, useState, useContext } from "react";
import "./style2.css";
import axios from "axios";
import Feed from "../../components/Posts/index.jsx";
import NoBgButton from "../../components/Buttons/NoBGButton/index.jsx";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import EditAlbumModal from "../../components/Modals/EditAlbumModal/index.jsx";
import EditUserModal from "../../components/Modals/EditUserModal/index.jsx";

function Card({ event }) {
  const navigate = useNavigate();
  const navigateToEvent = (idEvent) => {
    navigate(`/event/${idEvent}`);
  };
  const imageUrl =
    event.pictures && event.pictures.length > 0
      ? event.pictures[0].imageUrl
      : null;

  return (
    <div className="card-event">
      <img src={imageUrl} alt={event.eventName} className="card-image" />

      <div className="card-content">
        <h2 className="card-title">{event.eventName}</h2>
        <button
          onClick={() => navigateToEvent(event.eventId)}
          className="viewpfp-event-button"
        >
          View Event
        </button>
      </div>
    </div>
  );
}

function Profile() {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const [editUserIsOpen, setEditUserIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [userInfo, setUserInfo] = useState({
    profilePicture: null, // Provide a default value or null
    firstName: "",
    lastName: "",
    username: "",
  });
  const [userVisit, setUserVisit] = useState();

  const [error, setError] = useState("");

  const defaultCoverImage =
    process.env.PUBLIC_URL + "/defaultCoverAlbumPhoto/default.jpg";

  const fetchEventsInProfile = async () => {
    //get picture
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/event?&ownerId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setEvents(result?.data?.data || []);
      console.log("events in profile", result?.data.data);
    } catch (error) {
      setError(error);
      console.error("error fetching event data ", error);
    }
  };

  const fetchUserInfo = async () => {
    //get user by id
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setUserInfo(result.data);
      console.log("user info", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching user info ", error);
    }
  };

  useEffect(() => {
    fetchEventsInProfile();
    fetchUserInfo();
  }, [userId]);

  const fetchUserVisit = async () => {
    //get user by id
    try {
      const result = await axios.get(
        `https://capture-it.azurewebsites.net/api/user/${username}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setUserVisit(result.data);
      console.log("user info", result.data);
    } catch (error) {
      setError(error);
      console.error("error fetching user info ", error);
    }
  };

  useEffect(() => {
    fetchUserVisit();
  }, [username]);

  const editUser = () => {
    setEditUserIsOpen(true);
  };
  const editedUser = () => {
    setEditUserIsOpen(false);
  };
  // Filter out duplicate events
  // const uniqueEvents = Array.from(new Set(events.map((event) => event.eventId))).map(
  //   (id) => {
  //     return events.find((event) => event.eventId === id);
  //   }
  // );

  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={userInfo.profilePicture || defaultCoverImage}
            alt="Profile "
            className="profile-pic"
          />
          <div className="profile-info">
            <h1 className="name">
              {userInfo.firstName} {userInfo.lastName}{" "}
            </h1>
            <p className="username">@{userInfo.username}</p>
          </div>
        </div>
        {/* user info fetch rbaoti */}
        <div className="profile-actions">
          {editUserIsOpen && <EditUserModal onClose={editedUser} />}
          <button className="edit-button" onClick={editUser}>
            <i class="bi bi-pencil-square"></i> Edit
          </button>
        </div>
        <div className="cardpfp-container">
          {events.map((event) => (
            <Card event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;

/*
{uniqueEvents.map((event) => (
          <Card key={event.id} event={event} />
        ))}

const events = [
    {
      id: 1,
      name: "Beach",
      image:
        "https://ik.imagekit.io/tvlk/blog/2018/04/book-750x400.png?tr=dpr-2,w-675",
    },
    {
      id: 2,
      name: "Party",
      image:
        "https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg",
    },
    {
      id: 3,
      name: "Wedding",
      image:
        "https://www.thebrewery.co.uk/wp-content/uploads/2020/03/LA-430-scaled.jpg",
    },
    {
      id: 4,
      name: "Concert",
      image:
        "https://skopjemetropolitan.edu.mk/wp-content/uploads/2018/08/aditya-chinchure-494048-unsplash.jpg",
    },
    {
      id: 5,
      name: "Festival",
      image:
        "https://www.valleyfest.co.uk/wp-content/uploads/2024/02/220806_ValleyFest_Saturday_GiuliaSpadafora_HiRes-00204-Web-1200x799.jpeg",
    },
    {
      id: 6,
      name: "Birthday",
      image:
        "https://cf.ltkcdn.net/celebrations/parties/images/orig/341607-1600x1066-birthday-party-names-1001540940.jpg",
    },*/
