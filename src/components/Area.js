import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardHeader,
  CardActions,
  Collapse,
  IconButton,
  CardContent,
} from "@material-ui/core";
import clsx from "clsx";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));
const grey = "#696969";
const pink = "rgb(242, 133, 150)";

function Area({
  name,
  description,
  directions,
  email,
  updated,
  lat,
  long,
  map,
  phone,
}) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <Grid
        style={{ paddingLeft: "1rem", paddingBottom: "1rem", margin: "auto" }}
      >
        <Grid item justify="center" alignItems="center">
          <Card className={classes.root} raised>
            <CardActionArea>
              <CardHeader title={name} />
              <CardActions disableSpacing>
                {favorite(handleToggle, toggle)}

                {learnMore(classes, expanded, handleExpandClick)}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                {cardContent(
                  description,
                  updated,
                  directions,
                  lat,
                  long,
                  phone,
                  email,
                  map
                )}
              </Collapse>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Area;
function cardContent(
  description,
  updated,
  directions,
  lat,
  long,
  phone,
  email,
  map
) {
  return (
    <CardContent>
      <Typography component="body2">
        <strong>Description: </strong>
      </Typography>
      <Typography
        component="body"
        dangerouslySetInnerHTML={{ __html: description }}
      ></Typography>
      <Typography component="body">
        <strong>Last Updated: </strong>
        <span>{updated}</span>
      </Typography>
      {directions !== "" ? (
        <Typography component="body">
          <strong>Directions: </strong>

          <span dangerouslySetInnerHTML={{ __html: directions }}></span>
        </Typography>
      ) : null}

      {lat !== 0 && long !== 0 ? (
        <Typography component="body">
          <strong>Coordinates: </strong>
          <span>
            {lat}, {long}
          </span>
        </Typography>
      ) : null}

      {phone !== "" ? (
        <Typography component="body">
          <strong>Phone: </strong>
          <span>{phone}</span>
        </Typography>
      ) : null}
      {email !== "" ? (
        <Typography component="body">
          <strong>Email: </strong>
          <span>{email}</span>
        </Typography>
      ) : null}
      {map !== "" ? (
        <Typography component="body">
          <strong>Map: </strong>
          <a href={map} dangerouslySetInnerHTML={{ __html: map }}></a>
        </Typography>
      ) : null}
    </CardContent>
  );
}

function learnMore(classes, expanded, handleExpandClick) {
  return (
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="Explore More"
    >
      <Typography align="right" variant="body2" style={{ padding: ".1rem" }}>
        Learn more...
      </Typography>
      <ExpandMoreIcon />
    </IconButton>
  );
}

function favorite(handleToggle, toggle) {
  return (
    <IconButton aria-label="add to favorites" onClick={handleToggle}>
      {toggle ? (
        <FavoriteIcon style={{ color: pink }} />
      ) : (
        <FavoriteIcon style={{ color: grey }} />
      )}
    </IconButton>
  );
}
