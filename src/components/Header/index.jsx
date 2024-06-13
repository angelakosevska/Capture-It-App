import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo1 from "../../Logo";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/index";
import NoBgButton from "../Buttons/NoBGButton";
import CreateEventModal from "../Modals/CreateEventModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import NoBgButtonWhite from "../Buttons/NoBGButtonWhite";
import SecondaryButton from "../Buttons/SecondaryButton";

const Header = ({}) => {
  const { logout } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);
  const { authToken, userId, username, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);

  const createNewEvent = () => {
    setCreateEvent(true);
  };
  const createdNewEvent = () => {
    setCreateEvent(false);
  };

  // const suggestions = ["John Doe", "Jane Smith", "Event Name"];

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleProfileLink = () => {
    navigate(`/profile/${username}`);
  };
  const navigateToEvent = (suggestion) => {
    try {
      const eventId = suggestion.eventId;
      navigate(`/event/${eventId}`);
    } catch (error) {
      console.error("Error navigating to event details:", error);
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get(
            `https://capture-it.azurewebsites.net/api/event`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          const eventSuggestions = response.data.data.map((event) => ({
            eventId: event.eventId,
            eventName: event.eventName,
          }));
          setSuggestions(eventSuggestions);
          console.log(
            "header event suggestioons",
            response.data.data.eventName
          );
        } catch (error) {
          console.error("Error fetching event suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  return (
    <header>
      <div className="Logo">
        <Link to="/">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Logo1 />
          </svg>
        </Link>
        <div className="LogoText">
          <Link to="/">Capture It</Link>
        </div>
      </div>

      <div className="SearchBar">
        <div className="menuAndItem">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSearchDropdown(true);
            }}
            onFocus={() => setShowSearchDropdown(true)}
            onBlur={() => setShowSearchDropdown(false)}
          />
          {/* {showSearchDropdown && (
            <div className="SearchDropdownMenu">
              {suggestions
                .filter((suggestion) =>
                  suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((suggestion) => (
                  <div className="SearchDropdownItem">
                    <NoBgButton
                      onClick={() => navigateToEvent(suggestion.eventId)}
                      buttonText={suggestion.eventName}
                    />
                  </div>
                ))}
            </div>  )}*/}
        </div>
      </div>
      {authToken ? (
        <>
          <div className="CreateEvent">
            {createEvent && <CreateEventModal onClose={createdNewEvent} />}
            <NoBgButtonWhite
              buttonIcon={<i className="bi bi-plus-circle"></i>}
              onClick={createNewEvent}
            />
          </div>
          <div className="ProfileLink" onClick={handleProfileClick}>
            <NoBgButtonWhite
              buttonIcon={<i className="bi bi-person-circle"></i>}
            />
            {showProfileDropdown && (
              <div className="ProfileDropdownMenu">
                <div className="dropdown-item">{username}</div>
                <div className="dropdown-item">
                  <NoBgButton
                    onClick={handleProfileLink}
                    buttonText={"Profile"}
                  />
                </div>
                <hr />
                <div className="dropdown-item">
                  <NoBgButton onClick={handleLogout} buttonText={"Logout"} />
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="LoginButton">
          <NoBgButtonWhite
            buttonText="Login"
            onClick={() => navigate("/login")}
            buttonHeight={"35px"}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
