import React, { useState, useContext } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { AreaContext } from "../providers/AreasProvider";
import AreaList from "../containers/AreaList";
// import FacilityList from "../containers/FacilityList";
import Facility from "./Facility";
const useStyles = makeStyles((theme) => ({
  mapContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

let center = [38.998, -105.641];

function MainMap(props) {
  const classes = useStyles();
  // const [areas, setAreas] = useContext(AreaContext);
  const [activeArea, setActiveArea] = useState(null);
  // console.log("usecontext", ));
  return (
    <>
      <Map center={center} zoom={6} />
      {/* <AreaList />
      <Facility /> */}
    </>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   />

    //   {value.map((area) => (
    //     <Marker
    //       key={area.id}
    //       position={[area.lat, area.long]}
    //       onclick={() => {
    //         setActiveArea(area);
    //       }}
    //     />
    //   ))}
    // </Map>
  );
}

export default MainMap;
