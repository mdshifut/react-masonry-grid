import React from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import LoginModal from "../../components/LoginModal/LoginModal";

const useStyle = makeStyles({
  mainHeaderWrapper: {
    // height: "58px",
    padding: "8px 15px",
    backgroundColor: "#f8f8f8",
    position: "fixed",
    left: "8px",
    top: "8px",
    zIndex: 999,
    width: "100%",
    borderTop: "1px solid #e7e7e7",
    borderBottom: "1px solid #e7e7e7",
  },
  mainLogoText: {
    fontSize: "18px",
    color: "#777",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  navUl: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& li": {
      display: "inline-block",
    },
    "& li a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 8px",
      fontSize: "16px",
      color: "#777",
      transition: "0.3s",
      "&:hover": {
        color: "#db3d44",
      },
      "& span": {
        fontSize: "16px",
      },

      "&.buttonMenu": {
        backgroundColor: "#db3d44",
        color: "#fff",
        paddingLeft: "20px",
        paddingRight: "20px",
        textTransform: "uppercase",
        fontWeight: "700",
        "&:first-child": {
          marginLeft: "15px",
        },
        "&:hover": {
          backgroundColor: "#777",
        },
      },
    },
  },
});

const MainHeader = () => {
  const [loginModalOpen, setOpen] = React.useState(false);

  const loginModalOpenHandler = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const loginModalClose = () => {
    setOpen(false);
  };

  const classes = useStyle();
  return (
    <>
      <LoginModal open={loginModalOpen} handleClose={loginModalClose} />
      <Grid className={classes.mainHeaderWrapper} container spacing={2}>
        <Grid item lg={4} className={classes.headerLeft}>
          <h1 className={classes.mainLogoText}>Site Logo</h1>
        </Grid>
        <Grid item lg={8} className={classes.headerRight}>
          <nav>
            <ul className={classes.navUl}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Device</NavLink>
              </li>
              <li>
                <NavLink to="/">Reports</NavLink>
              </li>
              <li>
                <NavLink to="/">Settings</NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <Icon>email</Icon>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <Icon>favorite</Icon>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <Icon>language</Icon>
                </NavLink>
              </li>
              <li>
                <a href="#login" onClick={loginModalOpenHandler}>
                  Login
                </a>
              </li>
              <li>
                <a href="/" className="buttonMenu">
                  Join free
                </a>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    </>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
