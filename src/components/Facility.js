import React, { useState } from "react";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

function Facility({ name, description, directions, lat, long, updated }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={name} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon>{/* <Link >Add to Favorites</Link> */}</FavoriteIcon>
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Explore More"
        >
          <Typography
            align="right"
            variant="body2"
            style={{ padding: ".1rem" }}
          >
            Learn more...
          </Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            component="body"
            dangerouslySetInnerHTML={{ __html: description }}
          ></Typography>
        </CardContent>
      </Collapse>
    </Card>
    //     <div
    //       style={{
    //         borderBottom: "1px dashed ",
    //         marginBottom: "5px",
    //         padding: "2rem",
    //         margin: "auto",
    //       }}
    //     >
    //       <h3>Description:</h3>
    //       <p dangerouslySetInnerHTML={{ __html: description }}></p>
    //       <p>
    //         <strong>Last Updated: </strong>
    //         {updated}
    //       </p>
    //       <h3>Directions:</h3>
    //       {directions !== "" ? (
    //         <p dangerouslySetInnerHTML={{ __html: directions }}></p>
    //       ) : (
    //         <span>Sorry, directions to {name} are unknown.</span>
    //       )}
    //       <p>
    //         <strong>Coordinates: </strong>
    //         <span>
    //           {lat !== 0 && long !== 0 ? (
    //             <span>
    //               {/* <MarkerData lat={lat} long={long} /> */}
    //               {lat}, {long}
    //             </span>
    //           ) : (
    //             <span>Sorry, coordinates for {name} were not found.</span>
    //           )}
    //         </span>
    //       </p>
    //     </div>
    //   );
  );
}

export default Facility;
