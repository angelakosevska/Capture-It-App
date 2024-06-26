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
import EditUserModal from "../Modals/EditUserModal";
import SearchEvents from "../Search/SearchEvent";

const Header = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [editUserIsOpen, setEditUserIsOpen] = useState(false);

  const createNewEvent = () => {
    setCreateEvent(true);
  };
  const createdNewEvent = () => {
    setCreateEvent(false);
  };

  const suggestionsDummy = ["John Doe", "Jane Smith", "Event Name"];

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
  const editUser = () => {
    setEditUserIsOpen(true);
  };
  const editedUser = () => {
    setEditUserIsOpen(false);
  };
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

      <div className="searchHeader">
        <SearchEvents />
      </div>
      <div className="headerRight">
        {authToken ? (
          <>
            <div className="CreateEvent">
              {editUserIsOpen && <EditUserModal onClose={editedUser} />}
              {createEvent && <CreateEventModal onClose={createdNewEvent} />}
              <NoBgButtonWhite
                buttonIcon={<i className="bi bi-plus-circle" />}
                onClick={createNewEvent}
              />
            </div>
            <div className="ProfileLink" onClick={handleProfileClick}>
              <NoBgButtonWhite
                buttonIcon={<i className="bi bi-person-circle" />}
              />
              {showProfileDropdown && (
                <div className="ProfileDropdownMenu">
                  <div className="dropdown-item">{username}</div>
                  <div className="dropdown-item">
                    <NoBgButton
                      onClick={handleProfileLink}
                      buttonText={"Profile"}
                      buttonIcon={<i class="bi bi-person-fill"></i>}
                    />
                  </div>
                  <div className="dropdown-item">
                    <NoBgButton
                      className="edit-button"
                      onClick={editUser}
                      buttonIcon={<i class="bi bi-pencil-square" />}
                      buttonText={" Edit user"}
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
      </div>
    </header>
  );
};

export default Header;
