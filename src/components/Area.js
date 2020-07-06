import React, { useContext } from "react";
import { AreaContext } from "../providers/AreasProvider";

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
  return (
    <div style={{ borderBottom: "1px dashed ", marginBottom: "5px" }}>
      <h1>{name}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <p>{directions}</p>
      <p>
        {lat !== 0 && long !== 0 ? (
          <p style={{ textAlign: "center" }}>
            Coordinates: {lat}, {long}
          </p>
        ) : (
          <p>Coordinates: No coordinates for {name}</p>
        )}
      </p>
      {/* <p>
        {lat !== 0 && long !== 0 ? (
          <p style={{ textAlign: "center" }}>
            Latitude: {lat}, Longitude: {long}
          </p>
        ) : (
          <p>There are no coordinates for {name}</p>
        )}
      </p> */}
    </div>
  );
}

export default Area;
