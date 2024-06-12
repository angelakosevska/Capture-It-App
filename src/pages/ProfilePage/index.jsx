import { AuthContext } from "../../context/index.jsx";
import { useEffect, useState, useContext } from "react";
import "./style2.css";
import axios from "axios";

function Card({ event }) {
  return (
    <div className="card-event">
      <img src={event.image} alt={event.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{event.name}</h2>
        <a href={`/events/${event.id}`} className="viewpfp-event-button">
          View event
        </a>
      </div>
    </div>
  );
}

function Profile() {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);

  const [events, setEvents] = useState();
  const [userInfo, setUserInfo]=useState();
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

      setEvents(result.data.data);
      console.log("events in profile", result.data.data)

    } catch (error) {
      setError(error);
      console.error("error fetching event data ", error);
    }
  };


  const fetchUSerInfo = async () => {
    //get picture
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
      console.log("user info", result.data)

    } catch (error) {
      setError(error);
      console.error("error fetching user info ", error);
    }
  };

  useEffect(() => {
    fetchEventsInProfile();
    fetchUSerInfo();
  }, [userId]);

  if (!userInfo) {
    return <div>Loading...</div>; // Show a loading state while fetching user info
  }

  // Filter out duplicate events
  // const uniqueEvents = Array.from(new Set(events.map((event) => event.eventId))).map(
  //   (id) => {
  //     return events.find((event) => event.eventId === id);
  //   }
  // );

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={userInfo.profilePicture}
          alt="Profile Picture"
          className="profile-pic"
        />
        <div className="profile-info">
          <h1 className="name">{userInfo.firstName}{" "}{userInfo.lastName} </h1>
          <p className="username">@{username}</p>
        </div>
      </div>
      <div className="profile-actions">
        <input type="text" placeholder="Search events" className="search-bar" />
        <button className="edit-button">
          <i class="bi bi-pencil-square"></i> Edit
        </button>
      </div>
      <div className="cardpfp-container">
        
      </div>
    </div>
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
