import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const backgroundImage =
  "https://images.unsplash.com/photo-1507582192288-85da0ba8c1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";
const underBackground =
  "https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backdrop: {
    backgroundImage: `url(${underBackground})`,
    opacity: 0.5,
    marginTop: "80vh",
    height: "20vh",
    width: "100%",
  },
  backgroundImageHero: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    height: "80vh",
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4),
  },
}));

function HomeHero() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container
        className={classes.container}
        className={classes.backgroundImageHero}
      >
        <KeyboardArrowDown
          style={{ display: "flex", alignItems: "center" }}
          className={classes.arrowDown}
        />
      </Container>
    </section>
  );
}

export default HomeHero;
