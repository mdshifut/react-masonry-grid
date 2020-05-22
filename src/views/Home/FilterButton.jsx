import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyle = makeStyles({
  filterButtonWrapper: {
    position: "relative",
  },
  toggleButton: {
    backgroundColor: "transparent",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    border: "none",
    color: "#777",
    fontSize: "18px",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
  },
  dropDown: {
    position: "absolute",
    right: "0",
    top: "50px",
    minWidth: "200px",
    width: "100%",
    zIndex: "999",
    listStyle: "none",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    padding: 0,
    transition: "0.3s",
    opacity: "0",
    visibility: "hidden",
  },

  dropDownOpen: {
    top: "-10px",
    opacity: "1",
    visibility: "visible",
  },
  filterButton: {
    padding: "10px 15px",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  selected: {
    backgroundColor: "#ddd",
  },
});

const FilterButton = (props) => {
  const filterButtonWrapperRef = useRef();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Recommended");
  const buttonClickHandler = (currentItem) => () => {
    setSelected(currentItem);
    setOpen(false);
  };
  const classes = useStyle();

  const outSideClickHandler = (e) => {
    if (!filterButtonWrapperRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", outSideClickHandler);
    return () => document.removeEventListener("click", outSideClickHandler);
  }, []);
  return (
    <div className={classes.filterButtonWrapper} ref={filterButtonWrapperRef}>
      <button className={classes.toggleButton} onClick={() => setOpen(!open)}>
        {selected}
        <ExpandMoreIcon />
      </button>
      <ul className={clsx(classes.dropDown, { [classes.dropDownOpen]: open })}>
        <li
          className={clsx(classes.filterButton, {
            [classes.selected]: selected === "Recommended",
          })}
          onClick={buttonClickHandler("Recommended")}
        >
          Recommended
        </li>
        <li
          className={clsx(classes.filterButton, {
            [classes.selected]: selected === "Latest",
          })}
          onClick={buttonClickHandler("Latest")}
        >
          Latest
        </li>
        <li
          className={clsx(classes.filterButton, {
            [classes.selected]: selected === "Old",
          })}
          onClick={buttonClickHandler("Old")}
        >
          Old
        </li>
      </ul>
    </div>
  );
};

FilterButton.propTypes = {};

export default FilterButton;
