import React, { useState, useContext } from "react";
import { FacilityContext } from "../providers/FacilityProvider";

export default function FacilityList() {
  const [facilities, setFacilities] = useContext(FacilityContext);
  const facilityInfo = facilities.map((facility) => (
    <section>
      <h1 name={facility.name} />
      <p description={facility.description} />
      <p directions={facility.directions} />
      <ul>
        <li coords={facility.lat && facility.long} />
      </ul>
      <p updated={("Last Updated: ", facility.lastUpdated)} />
    </section>
  ));
  return <>{facilityInfo}</>;
}
