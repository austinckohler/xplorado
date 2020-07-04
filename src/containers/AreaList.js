import React, { useState, useContext } from "react";
import { AreaContext } from "../providers/AreasProvider";

export default function AreaList() {
  const [areas, setAreas] = useContext(AreaContext);
  const areasInfo = areas.map((area) => Object.values(area).filter(String));
  return <section>{areasInfo}</section>;
}
