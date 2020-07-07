import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import FacilityList from "../containers/FacilityList";
import { campCoord } from "./data/FacilityData";
import { Link, Typography } from "@material-ui/core";

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
  const [activeFacility, setActiveFacility] = useState(null);

  return (
    <>
      <NavBar />
      <Map center={center} zoom={7} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {campCoord.map((facility) => (
          <Marker
            key={facility.id}
            position={[facility.lat, facility.long]}
            onclick={() => {
              setActiveFacility(facility);
            }}
            icon={defaultIcon}
          />
        ))}

        {activeFacility && (
          <Popup
            key={activeFacility.id}
            position={[activeFacility.lat, activeFacility.long]}
            onClose={() => {
              setActiveFacility(null);
            }}
          >
            <div>
              <Typography variant="h4">{activeFacility.name}</Typography>
            </div>
          </Popup>
        )}
      </Map>

      <FacilityList />
    </>
  );
}

export default FacilitiesMap;
