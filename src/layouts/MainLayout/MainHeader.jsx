import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  mainHeaderWrapper: {
    height: "50px",
    padding: "10px 15px",
    backgroundColor: "#f8f8f8",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 999,
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #e7e7e7",
    borderBottom: "1px solid #e7e7e7",
  },
  mainLogoText: {
    fontSize: "20px",
    color: "#777",
  },
});

const MainHeader = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.mainHeaderWrapper}>
      <h1 className={classes.mainLogoText}>Site Logo</h1>
    </div>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
