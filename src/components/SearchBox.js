import { React, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { storeQueryTerm } from "../features/termSlice";
import { useHistory } from "react-router-dom";
import "../css/SearchBox.css";

const SearchBox = ({ showButtons, query, inSearchResults }) => {
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchInputRef.current.value);
    if (searchInputRef.current.value !== "") {
      dispatch(
        storeQueryTerm({
          query: searchInputRef.current.value,
        })
      );
      history.push("/search");
    }
  };

  const handleEmptyInput = (e) => {
    e.preventDefault();
    searchInputRef.current.value = "";
  };
  return (
    <form className="homepage__bodyForm">
      <div className="homepage__bodyInput">
        {!inSearchResults && (
          <SearchIcon
            onClick={handleSearch}
            fontSize="small"
            className="homepage__searchIcon"
          />
        )}
        <input
          ref={searchInputRef}
          className="homepage__searchInput"
          type="text"
        />
        <CloseIcon
          onClick={handleEmptyInput}
          fontSize="small"
          className="homepage__searchIcon"
        />
        {inSearchResults && (
          <SearchIcon
            onClick={handleSearch}
            fontSize="large"
            className="homepage__searchIconRight"
          />
        )}
      </div>
      <div className={`homepage__bodyButtons ${showButtons && "showButtons"}`}>
        <Button
          type="submit"
          onClick={handleSearch}
          className="homepage__bodyButton"
          variant="outlined"
        >
          Google Search
        </Button>
        <Button className="homepage__bodyButton" variant="outlined">
          I'm feeling lucky
        </Button>
      </div>
    </form>
  );
};

export default SearchBox;
