import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import Logo1 from "../../Logo/index";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const suggestions = ["John Doe", "Jane Smith", "Event Name"];

  return (
    <>
      <header>
        <div>
          <div className="Logo">
            <Logo1/>
          </div>
        </div>
        <div className="navButton">
          <Link to="/captureIt">Home</Link>
        </div>

        <div className="SearchBar">
          <div className="menuAndItem"></div>
        </div>

        <div className="navButton">
          <Link to="/profile">Profile</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
