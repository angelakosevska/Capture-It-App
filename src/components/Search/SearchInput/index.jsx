import "./style.css";

const SearchInput = ({
  searchTerm,
  handelInputChange,
  placeholderSearchInput,
}) => {
  return (
    <>
      <input
        value={searchTerm}
        onChange={handelInputChange}
        placeholder={placeholderSearchInput}
        className="input-search"
        type="text"
      />
    </>
  );
};

export default SearchInput;

