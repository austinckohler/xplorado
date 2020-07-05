import React, { useState, useContext } from "react";
import { AreaContext } from "../providers/AreasProvider";
import Area from "../components/Area";

export default function AreaList() {
  const [areas, setAreas] = useContext(AreaContext);
  console.log(areas);
  const areaInfo = areas.map((area) => (
    <Area
      key={area.id}
      name={area.name}
      description={area.description}
      directions={area.directions}
      email={area.email}
      lat={area.lat}
      long={area.long}
      map={area.map}
      phone={area.phone}
      updated={area.lastUpdated}
    />
  ));
  //   console.log("drill", facilityInfo);
  return <>{areaInfo}</>;
}
