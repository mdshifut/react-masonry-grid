import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import bgImage from "./bg.jpeg";
import logoImage from "./logo.png";

import {
  Button,
  Dialog,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    padding: theme.spacing(18, 6, 10, 6),
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    zIndex: 1,
    borderRadius: 0,
    overflow: "visible",
    // margin: theme.spacing(6),
    "&::after": {
      position: "absolute",
      content: '""',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      backgroundColor: "#00000070",
    },
  },
  logo: {
    position: "absolute",
    right: 0,
    top: 0,
    transform: "translateY(-20%) translateX(10%)",
    maxWidth: "200px",
    maxHeight: "100px",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  title: {
    textTransform: "uppercase",
    display: "inline-block",
    position: "relative",
    marginBottom: theme.spacing(9),
    "&::after": {
      position: "absolute",
      left: 0,
      bottom: 0,
      content: '""',
      backgroundColor: theme.palette.primary.main,
      height: "2px",
      width: "100%",
    },
  },
  underline: {
    "&:before": {
      borderBottom: "1px solid rgba(255, 133, 51, 0.42)",
    },
    "&:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  inputs: {
    marginBottom: theme.spacing(4),
    "& .MuiInput-underline:before": {
      borderBottom: `1px solid ${theme.palette.text.secondary}`,
    },
  },

  buttonContained: {
    borderRadius: "50px",
  },
  buttonRoot: {
    fontWeight: "700",
    padding: theme.spacing(1.4, 8),
  },
  forgotPasswordLink: {
    display: "inline-block",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(6),
    transition: "0.3s",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}));

const LoginModal = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      classes={{ paper: classes.dialogPaper }}
      fullWidth
      maxWidth="sm"
      scroll="body"
    >
      <div className={classes.logo}>
        <img src={logoImage} alt="Logo" />
      </div>
      <Typography variant="h6" className={classes.title}>
        Login
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="username"
          label="USERNAME"
          fullWidth
          className={classes.inputs}
        />
        <TextField
          id="password"
          label="PASSWORD"
          fullWidth
          className={classes.inputs}
        />

        <Grid container spacing="2">
          <Grid item xs={6}>
            <FormControlLabel
              color="primary"
              control={<Checkbox name="stayLog" color="primary" />}
              label="Keep me logged in"
            />
          </Grid>
          <Grid item container xs={6} justify="flex-end">
            <Button
              color="primary"
              variant="contained"
              classes={{
                contained: classes.buttonContained,
                root: classes.buttonRoot,
              }}
              size="large"
              type="submit"
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Link className={classes.forgotPasswordLink} to="/forgot-password">
            Forgot your password?
          </Link>
        </Grid>
      </form>
    </Dialog>
  );
};

export default LoginModal;
