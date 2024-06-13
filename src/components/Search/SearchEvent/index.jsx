import { useState, useEffect, useContext } from "react";
import SearchInput from "../SearchInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context";
import styles from "./style.module.css";

const SearchEvents = () => {
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const [error, setError] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const fetchAllEvents = async () => {
    try {
      const result = await axios.get(
        //get events
        `https://capture-it.azurewebsites.net/api/event`,
        {
          headers: {
            Authorization: ` Bearer  ${authToken}`,
          },
        }
      );

      const eventsData = result.data.data.map((event) => ({
        eventName: event.eventName,
        eventId: event.eventId,
      }));

      setEvents(eventsData);
      console?.log("events in app", eventsData);
    } catch (error) {
      setError(error);
      console.error("error fetching all events: ", error);
    }
  };
  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((event) =>
        event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, events]);

  const handleSelectEvent = (eventId) => {
    navigate(`/event/${eventId}`);
  };
  return (
    <>
      <div className={styles.SearchBar}>
        <div className={styles.menuAndItem}>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSearchDropdown(true);
            }}
          />
          <div className={styles.SearchDropDownMenu}>
            {searchTerm && (
              <div>
                {filteredEvents.map((event) => (
                  <div
                    className={styles.SearchDropDownItem}
                    onClick={() => handleSelectEvent(event.eventId)}
                  >
                    {event.eventName}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchEvents;
