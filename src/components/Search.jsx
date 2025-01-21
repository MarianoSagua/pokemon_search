import { useRef, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseIcon from "@mui/icons-material/Close";

export const Search = ({ onAddValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [flagIconSearch, setFlagIconSearch] = useState(false);
  const inputSearch = useRef(null);

  const search = () => {
    setFlagIconSearch(true);
    onAddValue(inputValue);
  };

  const closeSearch = () => {
    setFlagIconSearch(false);
    setInputValue("");
    onAddValue("");
    inputSearch.current.value = "";
  };

  return (
    <div className="searchPokemon">
      <input
        ref={inputSearch}
        onChange={(e) => setInputValue(e.target.value)}
        className="searchPokemon__input"
        type="text"
      />

      {flagIconSearch ? (
        <button onClick={closeSearch}>
          <CloseIcon
            color="success"
            className="searchPokemon__icon"
            fontSize="large"
          />
        </button>
      ) : (
        <button onClick={search}>
          <SearchRoundedIcon
            color="success"
            className="searchPokemon__icon"
            fontSize="large"
          />
        </button>
      )}
    </div>
  );
};
