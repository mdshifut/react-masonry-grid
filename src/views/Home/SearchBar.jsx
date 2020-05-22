import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles({
  searchBarWrapper: {
    position: "relative",
    display: "flex",
    border: "1px solid transparent",
    transition: "0.3s",
    borderRadius: "50px",
    overflow: "hidden",
  },
  expandedSearchBar: {
    borderColor: "#777",
  },
  input: {
    padding: "0",
    fontSize: "20px",
    border: "none",
    width: "0",
    transition: "width 0.3s",
    "&:focus": {
      outline: "none",
    },
  },
  expandedInput: {
    width: "300px",
    padding: "8px 20px",
  },
  button: {
    padding: "10px",
    color: "#777",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#db3d44",
    },
  },
});
const SearchBar = () => {
  const [expand, setExpand] = useState(false);
  const searchBarRef = useRef();

  const outSideClickHandler = (e) => {
    if (!searchBarRef.current.contains(e.target)) {
      setExpand(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", outSideClickHandler);
    return () => document.removeEventListener("click", outSideClickHandler);
  }, []);

  const classes = useStyle();
  return (
    <div
      ref={searchBarRef}
      className={clsx(classes.searchBarWrapper, {
        [classes.expandedSearchBar]: expand,
      })}
    >
      <input
        className={clsx(classes.input, {
          [classes.expandedInput]: expand,
        })}
        placeholder="Search"
      />
      <IconButton
        className={classes.button}
        aria-label="Search"
        onClick={() => setExpand(!expand)}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
