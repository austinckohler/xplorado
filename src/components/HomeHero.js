import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CssBaseline } from "@material-ui/core";

const backgroundImage =
  "https://images.unsplash.com/photo-1507582192288-85da0ba8c1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(22),
  },
  backgroundImageHero: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    height: "93.4vh",
  },
}));

function HomeHero() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <section className={classes.root}>
        <div
          style={{ flexGrow: 1, width: "100%" }}
          className={classes.backgroundImageHero}
        >
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
            className={classes.h5}
          >
            XPLORE COLORADO'S HIDDEN GEMS
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h4"
            className={classes.h5}
          >
            Enjoy hiking, biking, camping, xploring in solitude crowds?
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            align="center"
            className={classes.more}
          >
            Xplore the unknown
          </Typography>
        </div>
      </section>
    </CssBaseline>
  );
}

export default HomeHero;
