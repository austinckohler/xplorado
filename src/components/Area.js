import React, { useContext } from "react";
import { AreaContext } from "../providers/AreasProvider";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 300,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

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
  const [areas, setAreas] = useContext(AreaContext);
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} direction="row">
        <div
          style={{
            borderBottom: "1px dashed ",
            marginBottom: "5px",
            padding: "2rem",
            margin: "auto",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{ fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <h3>Description:</h3>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <p> Last Updated: {updated}</p>
          <h3>Directions:</h3>
          <p>
            {directions !== "" ? (
              <p dangerouslySetInnerHTML={{ __html: directions }}></p>
            ) : (
              <p>Sorry, we could't find there any directions to {name}</p>
            )}
          </p>
          <p>
            {directions === "" && email !== "" ? (
              <p>Try contacting the recreation area by email {email}</p>
            ) : null}
          </p>
          {phone !== {} || "" || ":" ? (
            <h4 style={{ display: "inline" }}>
              Phone:
              <span style={{ fontWeight: "normal" }}>{phone}</span>
            </h4>
          ) : null}
          <br></br>
          {email !== "" ? (
            <h4 style={{ display: "inline" }}>
              Email:
              <span style={{ fontWeight: "normal" }}>{email}</span>
            </h4>
          ) : null}
          <h3>
            Coordinates:
            <span>
              {lat !== 0 && long !== 0 ? (
                <span style={{ fontWeight: "normal", fontSize: "small" }}>
                  {lat}, {long}
                </span>
              ) : (
                <span style={{ fontWeight: "normal", fontSize: "small" }}>
                  Sorry, we don't have coordinates for {name}
                </span>
              )}
            </span>
          </h3>
          {map !== "" ? (
            <h3>
              Map:
              <a
                href={map}
                style={{ fontWeight: "normal", fontSize: "small" }}
                dangerouslySetInnerHTML={{ __html: map }}
              ></a>
            </h3>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
}

export default Area;
