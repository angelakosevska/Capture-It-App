import { useState } from "react";
import styles from "./style.modules.css";
import NoBgButton from "../../Buttons/NoBGButton";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "../../Buttons/IconButton";

const SearchAlbums = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(" ");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    if (onSearch) {
      onSearch(newSearchTerm);
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <div className="searchAndIcon">
          <input
            type="text"
            placeholder="Search albums..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input-search"
          />
        
        </div>
      </div>
    </>
  );
};
export default SearchAlbums;
