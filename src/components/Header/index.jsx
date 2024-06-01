import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo1 from "../../Logo";
import "./style.css";

const Header = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const suggestions = ["John Doe", "Jane Smith", "Event Name"];

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
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
           <Logo1/>
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
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setShowDropdown(false)}
          /> 
          {false && ( /*ova da se meni */
            <div className="SearchDropdownMenu">
              {suggestions
                .filter((suggestion) =>
                  suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((suggestion, index) => (
                  <div key={index} className="SearchDropdownItem">
                    {suggestion}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="CreateEvent">
        <Link to="/event">
          <i className="bi bi-plus-circle"></i>
        </Link>
      </div>
      <div className="ProfileLink" onClick={handleProfileClick}>
        <i className="bi bi-person-circle"></i>
        {showDropdown && ( /* i ova */
          <div className="ProfileDropdownMenu">
            <div className="dropdown-item">{user?.firstName}</div>
            <div className="dropdown-item">{user?.lastName}</div>
            <div className="dropdown-item">Settings</div>
            <hr />
            <div className="ProfileDropdownItem">
              <Link to="/Login">Log Out</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;