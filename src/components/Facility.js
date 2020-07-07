import React from "react";
import { Typography } from "@material-ui/core";

function Facility({ name, description, directions, lat, long, updated }) {
  return (
    <div
      style={{
        borderBottom: "1px dashed ",
        marginBottom: "5px",
        padding: "2rem",
        margin: "auto",
      }}
    >
      <Typography component="h1" variant="h5" style={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <h3>Description:</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <p>
        <strong>Last Updated: </strong>
        {updated}
      </p>
      <h3>Directions:</h3>
      {directions !== "" ? (
        <p dangerouslySetInnerHTML={{ __html: directions }}></p>
      ) : (
        <span>Sorry, directions to {name} are unknown.</span>
      )}
      <p>
        <strong>Coordinates: </strong>
        <span>
          {lat !== 0 && long !== 0 ? (
            <span>
              {/* <MarkerData lat={lat} long={long} /> */}
              {lat}, {long}
            </span>
          ) : (
            <span>Sorry, coordinates for {name} were not found.</span>
          )}
        </span>
      </p>
    </div>
  );
}

export default Facility;
