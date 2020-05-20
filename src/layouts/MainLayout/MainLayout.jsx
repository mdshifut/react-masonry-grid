import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Collapse from "@material-ui/core/Collapse";
import DropDownWrapper from "./DropDownWrapper";
import MainHeader from "./MainHeader";
import routes from "../../routes";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: "column",
  },
  appBar: {
    width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    },
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#fff",
    boxShadow: "none",
    padding: "10px 24px",
    top: "50px",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    display: "block",
    textDecoration: "none",
    color: "#f9dcdd",
    transition: "0.3s",
    "&.active": {
      backgroundColor: "#00000030",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#ffffff30",
      color: "#fff",
    },

    "& .menuButtonIcon": {
      color: "#f9dcdd",
      transition: "0.3s",
    },
    "&:hover .menuButtonIcon, &.active .menuButtonIcon": {
      color: "#fff",
    },
  },
  dropDownWrapper: {
    position: "relative",
    "&:hover .floatedDropDown": {
      opacity: 1,
      visibility: "visible",
    },
    "&:hover .menuButton": {
      backgroundColor: "#ffffff30",
    },
  },
  dropDownActive: {
    "& .menuButton": { backgroundColor: "#00000030", color: "#fff" },
    "& .active": {
      backgroundColor: "transparent",
      borderLeft: "2px solid #fff",
    },
  },
  subMenu: {
    paddingLeft: "15px",
  },

  listItemText: {
    opacity: 1,
    visibility: "visible",
    transition: "0.3s",
  },
  listItemTextClose: {
    opacity: 0,
    visibility: "hidden",
  },
  floatedDropDown: {
    position: "absolute",
    left: `${theme.spacing(7) + 1}px`,
    [theme.breakpoints.up("sm")]: {
      left: `${theme.spacing(9) + 1}px`,
    },
    background: "#fff",
    border: "1px #bbb solid",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.15)",
    top: "0",
    visibility: "hidden",
    opacity: 0,
    transition: "0.3s",
  },
  floatedDropDownButton: {
    color: "#000",
    "& .menuButtonIcon": {
      color: "#000",
      transition: "0.3s",
    },
    "&.active, &.active .menuButtonIcon": {
      color: "#db3d44",
    },
    "&:hover, &:hover .menuButtonIcon": {
      color: "#000",
    },
    "&:hover": {
      backgroundColor: "#00000 !important",
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  paper: { backgroundColor: "#db3d44", marginTop: "50px" },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "visible",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "112px",
  },
  fullContent: { padding: 0 },
  buttonToggle: {
    position: "relative",
    width: "64px",
    height: "64px",
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
    backgroundImage: "none",
    border: 0,
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },

    "& span": {
      display: "block",
      width: "20px",
      height: "2px",
      margin: " 0 auto",
      backgroundColor: "#fff",
      borderRadius: "1px",
      transition: "all 0.15s",
      opacity: " 0.7",
    },

    "& span:nth-child(2)": {
      marginTop: "4px",
    },

    "& span:nth-child(3)": {
      marginTop: "4px",
    },
  },

  buttonToggleExpand: {
    "& span": {
      width: " 25px",
    },

    "& span:nth-child(1)": {
      transform: "rotate(45deg)",
    },

    "& span:nth-child(2)": {
      opacity: 0,
    },
    "& span:nth-child(3)": {
      transform: "rotate(-45deg)",
      marginTop: "-8px",
    },
  },

  buttonGroup: {
    padding: 0,
    margin: 0,
    "& li": {
      display: "inline-block",
      borderTop: "1px solid #ccc",
      borderBottom: "1px solid #ccc",
      position: "relative",

      borderRight: "1px solid #ccc",
      "&:first-child": {
        borderLeft: "1px solid #ccc",
        borderRadius: "5px 0 0  5px",
      },
      "&:last-child": {
        borderRadius: "0 5px 5px  0",
      },
    },
    "& li a": {
      display: "flex",
      padding: "0 15px",
      height: "40px",
      alignItems: "center",
      fontSize: "15px",
      transition: "0.3s",
      color: "#222",
      justifyContent: "center",
      "&:hover": {
        backgroundColor: "#eee",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1) inset",
      },
    },

    "& li ul": {
      position: "absolute",
      zIndex: "99",
      backgroundColor: "#fff",
      width: "100%",
      top: "41px",
      padding: "8px 0",
      border: "1px solid #bbb",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      opacity: 0,
      visibility: "hidden",
      transition: "0.3s",
      "& li": {
        border: "none !important",
        borderRadius: 0,
        display: "block",
      },
    },
  },

  horizontalDropDownWrapperOpen: {
    backgroundColor: "#eee",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1) inset",
    "&  ul": {
      opacity: "1 !important",
      visibility: "visible !important",
    },
  },
}));

const getRoutes = (routes) => {
  return routes.map((route, key) => {
    if (route.collapse) {
      return getRoutes(route.views);
    }

    return (
      <Route path={route.path} exact component={route.component} key={key} />
    );
  });
};

const getRoute = () => {
  const fullScreenPaths = ["/"];
  return fullScreenPaths.includes(window.location.pathname);
};

export default function MiniDrawer() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activeDropDowns, setActiveDropDowns] = useState([]);
  const [activeHorizontalDropDown, setActiveHorizontalDropDown] = useState("");

  const toggleDropDown = (name) => () => {
    if (activeDropDowns.includes(name)) {
      return setActiveDropDowns(
        activeDropDowns.filter((dropDown) => dropDown !== name)
      );
    }

    setActiveDropDowns([...activeDropDowns, name]);
  };

  const toggleHorizontalDropDown = (name) => () => {
    if (activeHorizontalDropDown === name) {
      return setActiveHorizontalDropDown("");
    }

    setActiveHorizontalDropDown(name);
  };

  const getNavItems = (routes, isSubMenu) => {
    return routes.map((route, index) => {
      const {
        name,
        icon: Icon,
        collapse,
        views,
        path,
        invisible,
        redirect,
      } = route;

      if (redirect || invisible) {
        return null;
      }

      if (collapse) {
        return (
          <div
            className={clsx(classes.dropDownWrapper, {
              [classes.dropDownActive]: window.location.pathname.includes(
                route.path
              ),
            })}
            onClick={toggleDropDown(name)}
          >
            <ListItem
              button
              className={`${classes.menuButton} menuButton`}
              style={{ display: "flex" }}
            >
              <ListItemIcon>
                <Icon className="menuButtonIcon" />
              </ListItemIcon>
              <ListItemText
                primary={name}
                className={clsx(classes.listItemText, {
                  [classes.listItemTextClose]: !open,
                })}
              />
            </ListItem>
            {open ? (
              <Collapse in={activeDropDowns.includes(name)}>
                <List className={classes.subMenu}>
                  {getNavItems(views, true)}
                </List>
              </Collapse>
            ) : (
              <List className={`${classes.floatedDropDown} floatedDropDown`}>
                {getNavItems(views, true)}
              </List>
            )}
          </div>
        );
      }

      return (
        <NavLink
          className={clsx(classes.menuButton, {
            [classes.floatedDropDownButton]: !open && isSubMenu,
          })}
          to={path}
          key={index}
          exact
          onClick={(e) => e.stopPropagation()}
        >
          <ListItem button>
            <ListItemIcon>
              <Icon className="menuButtonIcon" />
            </ListItemIcon>
            <ListItemText
              primary={name}
              className={clsx(classes.listItemText, {
                [classes.listItemTextClose]: !open && !isSubMenu,
              })}
            />
          </ListItem>
        </NavLink>
      );
    });
  };
  const getHorizontalNavItems = (routes) => {
    return routes.map((route, index) => {
      const { name, collapse, views, path, invisible, redirect } = route;

      if (redirect || invisible) {
        return null;
      }

      if (collapse) {
        return (
          <DropDownWrapper
            outSideClickHandler={() => setActiveHorizontalDropDown("")}
            key={index}
            className={clsx(classes.horizontalDropDownButton, {
              [classes.horizontalDropDownActive]: window.location.pathname.includes(
                route.path
              ),
              [classes.horizontalDropDownWrapperOpen]:
                activeHorizontalDropDown === name,
            })}
            onClick={toggleHorizontalDropDown(name)}
          >
            <a href="#some">
              {name} <ArrowDropDownIcon />
            </a>

            <ul>{getHorizontalNavItems(views)}</ul>
          </DropDownWrapper>
        );
      }

      return (
        <li key={index} onClick={(e) => e.stopPropagation()}>
          <NavLink to={path} exact>
            {name}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <>
      <MainHeader />
      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <ul className={classes.buttonGroup}>
            {getHorizontalNavItems(routes)}
          </ul>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.paper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <button
              className={clsx(classes.buttonToggle, {
                [classes.buttonToggleExpand]: open,
              })}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <List className={classes.menuList}>{getNavItems(routes)}</List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.fullContent]: getRoute(),
          })}
        >
          <Switch>{getRoutes(routes)}</Switch>
        </main>
      </div>
    </>
  );
}
