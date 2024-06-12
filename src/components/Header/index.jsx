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

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get(
            `https://capture-it.azurewebsites.net/api/user`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          const userSuggestions= response.data.data.map((user) => user.username);
          setSuggestions(userSuggestions);
          console.log("header search suggestioons", response.data.data.username);
        } catch (error) {
          console.error("Error fetching user suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [username]);

  const navigateToProfile =(username)=>{
    navigate(`/profile/${username}`)
    
  }
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
          {showSearchDropdown && (
            <div className="SearchDropdownMenu">
              {suggestions
                .filter((suggestion) =>
                  suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((suggestion) => (
                //  <div className="SearchDropdownItem">{suggestion}</div>
                  <NoBgButton onClick={navigateToProfile(suggestion)} buttonText={suggestion}/>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="CreateEvent">
        {createEvent && <CreateEventModal onClose={createdNewEvent} />}
        <NoBgButton
          buttonIcon={<AddCircleOutlineIcon />}
          onClick={createNewEvent}
        />
      </div>
      <div className="ProfileLink" onClick={handleProfileClick}>
        <i className="bi bi-person-circle"></i>
        {showProfileDropdown && (
          <div className="ProfileDropdownMenu">
            <div className="dropdown-item">{username}</div>
            <div className="dropdown-item"></div>
            <div className="dropdown-item">
              <NoBgButton onClick={handleProfileLink} buttonText={"Profile"} />
            </div>
            <div className="dropdown-item">Settings</div>
            <hr />
            <div className="dropdown-item">
              <NoBgButton onClick={handleLogout} buttonText={"Logout"} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
