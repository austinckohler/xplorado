import React from "react";

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
  return (
    <div style={{ borderBottom: "1px dashed ", marginBottom: "5px" }}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{directions}</p>
    </div>
  );
}

export default Area;
