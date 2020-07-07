import React, { useState, useEffect, useContext } from "react";
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

function AreasMap(props) {
  const classes = useStyles();
  const [areas, setAreas] = useContext(AreaContext);
  const [activeArea, setActiveArea] = useState(null);

  return (
    <>
      <NavBar />
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
              <h4>{activeArea.name}</h4>
            </div>
          </Popup>
        )}
      </Map>
      {/* <Marker position={center} >
          <Popup position={center}>This is the pop up test</Popup>
        </Marker>
      </Map> */}
      <AreaList />
    </>
  );
}

export default AreasMap;
