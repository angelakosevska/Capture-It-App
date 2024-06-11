import { useState } from "react";
import styles from "./style.modules.css";
import NoBgButton from "../../Buttons/NoBGButton";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "../../Buttons/IconButton";
import CommentInput from "../../CommentsSection/AddComment/CommentInput";
import SearchInput from "../SearchInput";

const SearchAlbums = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    if (onSearch) {
      onSearch(newSearchTerm);
    }
  };

  return (
    <>
      <SearchInput
        placeholderSearchInput="Search album..."
        handelInputChange={handleSearchChange}
        searchTerm={searchTerm}
      />
    </>
  );
};
export default SearchAlbums;
