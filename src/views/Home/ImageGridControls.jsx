import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import AppsIcon from "@material-ui/icons/Apps";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import clsx from "clsx";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

const useStyle = makeStyles({
  controlsWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 10px",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "fixed",
    width: "100%",
    right: "0",
    zIndex: "999",
  },
  buttons: {
    color: "#777",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#db3d44",
    },
  },
  activeGrid: {
    color: "#0b0b0b",
  },
});

const ImageGridControls = ({ gridSize, setGridSize }) => {
  const classes = useStyle();
  return (
    <div className={classes.controlsWrapper}>
      <FilterButton />
      <SearchBar />
      <IconButton
        className={clsx(classes.buttons, {
          [classes.activeGrid]: gridSize === 12,
        })}
        onClick={() => setGridSize(12)}
        aria-label="Change Grid"
      >
        <ViewComfyIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.buttons, {
          [classes.activeGrid]: gridSize === 8,
        })}
        onClick={() => setGridSize(8)}
        aria-label="Change Grid"
      >
        <AppsIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.buttons, {
          [classes.activeGrid]: gridSize === 4,
        })}
        onClick={() => setGridSize(4)}
        aria-label="Change Grid"
      >
        <ViewModuleIcon />
      </IconButton>
    </div>
  );
};

ImageGridControls.propTypes = {};

export default ImageGridControls;
