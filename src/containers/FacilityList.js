import React, { useContext } from "react";
import { FacilityContext } from "../providers/FacilityProvider";
import Facility from "../components/Facility";

export default function FacilityList() {
  const [facilities, setFacilities] = useContext(FacilityContext);
  const facilityInfo = facilities.map((facility) => (
    <Facility
      key={facility.id}
      name={facility.name}
      description={facility.description}
      directions={facility.directions}
      lat={facility.lat}
      long={facility.long}
      updated={facility.lastUpdated}
    />
  ));
  return <>{facilityInfo}</>;
}
