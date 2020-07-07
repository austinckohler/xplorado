import React, { useState, useEffect, useContext } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import FacilityList from "../containers/FacilityList";
import { FacilityContext } from "../providers/FacilityProvider";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

function FacilitiesMap(props) {
  const classes = useStyles();
  const [facilities, setFacilities] = useContext(FacilityContext);
  const [activeFacility, setActiveFacility] = useState(null);

  // let area = areas.forEach((area) => {
  //   return console.log(area);
  // });
  // let id = areas.forEach((area) => {
  //   return area.id;
  // });
  // let name = areas.forEach((area) => {
  //   return area.name;
  // });

  // let lat = areas.forEach((area) => {
  //   return console.log(area.lat);
  //   // !== 0 ? area.lat : 39.739;
  // });
  // let long = areas.forEach((area) => {
  //   return area.long;
  //   // !== 0 ? area.long : -104.99;
  // });

  return (
    <>
      <NavBar />
      <Map center={center} zoom={6} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {facilities.forEach((facility) => {
          return (
            <Marker
              key={facility.id}
              position={console.log(facility.lat, facility.long)}
              // onclick={() => {
              //   setActiveArea(console.log(area));
              // }}
              icon={defaultIcon}
            />
          );
        })}
        {/* {activeArea && (
          <Popup
            position={console.log(activeArea.lat, activeArea.long)}
            onClose={() => {
              setActiveArea(null);
            }}
          >
            <div>
              <h1> Recreation Area: {activeArea.name}</h1>
            </div>
          </Popup>
        )} */}
      </Map>
      {/* <Marker position={center} >
          <Popup position={center}>This is the pop up test</Popup>
        </Marker>
      </Map> */}
      <FacilityList />
    </>
  );
}

export default FacilitiesMap;
