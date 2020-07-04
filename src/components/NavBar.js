import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Toolbar, Typography, AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    color: "#fff",
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
      <AppBar
        position="static"
        style={{ backgroundColor: "rgba(32, 32, 39, 0.97)" }}
        maxWidth="sm"
      >
        <Toolbar>
          <Link
            href="/"
            variant="h6"
            className={classes.title}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h6" className={classes.title}>
              Xplorado
            </Typography>
          </Link>
          <Link href="map" variant="button" className={classes.linkButton}>
            <Typography variant="body2" className={classes.title}>
              Map
            </Typography>
          </Link>
          <Link href="signIn" variant="button" className={classes.linkButton}>
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
