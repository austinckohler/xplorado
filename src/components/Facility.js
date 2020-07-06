import React from "react";

function Facility({ name, description, directions, lat, long, updated }) {
  return (
    <div style={{ borderBottom: "1px dashed ", marginBottom: "5px" }}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{directions}</p>
      {/* need conditional for lat and long so it doesn't show 0 */}
      <p>
        {lat !== 0 && long !== 0 ? (
          <p style={{ textAlign: "center" }}>
            Coordinates: {lat}, {long}
          </p>
        ) : (
          <p>Coordinates: No coordinates for {name}</p>
        )}
      </p>
      <p>Last updated date: {updated}</p>
    </div>
  );
}

export default Facility;
