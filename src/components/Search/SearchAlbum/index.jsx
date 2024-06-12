import { useState } from "react";
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
