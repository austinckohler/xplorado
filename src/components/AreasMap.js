import React, { useState, useContext } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { AreaContext } from "../providers/AreasProvider";
import AreaList from "../containers/AreaList";
import Facility from "./Facility";
import NavBar from "./NavBar";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { Coordinates } from "./data/AreaData";
import { Grid, Typography, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flexGrow: 1,
    padding: ".5rem",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));
const defaultIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let center = [38.998, -105.641];

function AreasMap(props) {
  const classes = useStyles();
  const [areas, setAreas] = useContext(AreaContext);
  const [activeArea, setActiveArea] = useState(null);

  return (
    <>
      <NavBar />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Map center={center} zoom={7} className="map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {Coordinates.map((area) => (
              <Marker
                key={area.id}
                position={[area.lat, area.long]}
                onclick={() => {
                  setActiveArea(area);
                }}
                icon={defaultIcon}
              />
            ))}

            {activeArea && (
              <Popup
                key={activeArea.id}
                position={[activeArea.lat, activeArea.long]}
                onClose={() => {
                  setActiveArea(null);
                }}
              >
                <div>
                  <Typography variant="body">{activeArea.name}</Typography>
                </div>
              </Popup>
            )}
          </Map>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          direction="row"
          justify="center"
          alignItems="center"
          elevation={6}
        >
          <div className={classes.paper}>
            <AreaList />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default AreasMap;
