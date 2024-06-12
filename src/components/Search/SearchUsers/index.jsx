import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./style.modules.css";
import SearchInput from "../SearchInput";
import { AuthContext } from "../../../context/index";

const SearchUsers = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const navigate = useNavigate();
  const { authToken, userId, username, login, logout } =
    useContext(AuthContext);
  const inputRef = useRef(null);

  const [isReadyForFocus, setIsReadyForFocus] = useState(false);

  useEffect(() => {
    setIsReadyForFocus(true);
  }, []);

  useEffect(() => {
    if (isReadyForFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isReadyForFocus]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://capture-it.azurewebsites.net/api/user",
          {
            headers: {
              Authorization: ` Bearer  ${authToken}`,
            },
          }
        );
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users ins earch:", error);
      }
    };
    getUsers();
  }, [authToken]);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    setShowSearchDropdown(newSearchTerm.length > 0);
    if (onSearch) {
      onSearch(newSearchTerm);
    }
  };

  const handleUserClick = (username) => {
    navigate(`/profile/${username}`);
    setShowSearchDropdown(false);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm)
  );
  const handleBlur = () => {
    setTimeout(() => {
      setShowSearchDropdown(false);
    }, 200); // Delay to allow time for click event on dropdown items
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchInput
          placeholderSearchInput="Search users..."
          handleInputChange={handleSearchChange}
          searchTerm={searchTerm}
        />
        {showSearchDropdown && (
          <div className={styles.dropdown}>
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleUserClick(user.username)}
              >
                {user.username}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchUsers;
