import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Toolbar, Typography, AppBar } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
  linkButton: {
    color: "#fff",
    cursor: "pointer",
    justifyContent: "center",
    paddingLeft: "1rem",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#696969" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Xplore
          </Typography>
          <Link href="signUp" variant="button" className={classes.linkButton}>
            <Typography variant="body2" className={classes.title}>
              Login
            </Typography>
          </Link>
          <Link href="signUp" variant="button" className={classes.linkButton}>
            <Typography variant="body2" className={classes.title}>
              Sign Up
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
