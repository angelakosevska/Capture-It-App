import { useState } from "react";
import styles from "./style.modules.css";
import NoBgButton from "../../Buttons/NoBGButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchAlbums = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(" ");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    if (onSearch) {
      onSearch(newSearchTerm);
    }
  };

  const handleSearch = () => {};

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search albums..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchIcon />
      </div>
    </>
  );
};
export default SearchAlbums;
