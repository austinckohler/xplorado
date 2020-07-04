import React, { useState, useContext } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { AreaContext } from "../providers/AreasProvider";
const useStyles = makeStyles((theme) => ({
  mapContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

let center = [38.998, -105.641];

function RecList(props) {
  const classes = useStyles();
  const value = useContext(AreaContext);
  const [activeArea, setActiveArea] = useState(null);
  console.log("usecontext", value);
  return (
    <>
      <h1>
        <Map center={center} zoom={6} />
        {/* {console.log(areas.map((area) => area.name))} */}
      </h1>
      {value}
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      /> */}
      {/* <Market key={id} /> */}
    </>
  );
}

export default RecList;
