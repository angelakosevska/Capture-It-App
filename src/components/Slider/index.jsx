import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/index";

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         zIndex: 1999,
//         height: "5px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         zIndex: 1999,
//         height: "5px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 50,
    pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  const [events, setEvents] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const { authToken, userId } = useContext(AuthContext);

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
        const allEvents = response.data.data;

        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        const recentEvents = allEvents.filter(
          (event) => new Date(event.createdAt) >= threeDaysAgo
        );

        const participantEvents = await Promise.all(
          recentEvents.map(async (event) => {
            try {
              const result = await axios.get(
                `https://capture-it.azurewebsites.net/api/event/${event.eventId}/participants`,
                {
                  headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
                }
              );
              const participants = result.data.participants;

              if (
                Array.isArray(participants) &&
                participants.some(
                  (participant) => participant.userId === userId
                )
              )
                return event;

              return null;
            } catch (error) {
              console.error(
                `Error fetching participants for event ${event.eventId}:`,
                error
              );
              return null;
            }
          })
        );

        const filteredEvents = participantEvents.filter(
          (event) => event !== null
        );
        setEvents(filteredEvents);

        const images = filteredEvents.flatMap((event) =>
          event.pictures.map((picture) => picture.imageUrl)
        );
        setImages(images);
      } catch (error) {
        console.error("Error fetching autoplay:", error);
      }
    };
    fetchEvents();
  }, [authToken, userId]);

  return (
    <div className="slider-container">
      {events.length === 0 ? (
        <p> No recent events</p>
      ) : (
        <>
          <h2>Your Recent Events</h2>
          <Slider {...settings}>
            {events.map((event, index) => (
              <div key={index}>
                <div
                  className="event-box"
                  style={{
                    backgroundImage:
                      event.pictures && event.pictures.length > 0
                        ? `url(${event.pictures[0].imageUrl})`
                        : "",
                  }}
                >
                  <button
                    className="view-event-button"
                    onClick={() => navigate(`/event/${event.eventId}`)}
                  >
                    View Event
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default AutoPlay;
