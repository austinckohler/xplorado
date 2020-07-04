import React, { useState, createContext, useEffect } from "react";

export const FacilityContext = createContext();
const facilitiesURL = "http://localhost:3000/facilities/";

export function FacilityProvider(props) {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    getFacilties();
  }, []);

  const getFacilties = async () => {
    await fetch(facilitiesURL)
      .then((response) => response.json())
      .then((retrieveFacilities) => setFacilities(retrieveFacilities));
  };
  const showFacilities = facilities.map((facility) => ({ ...facility }));

  return (
    <FacilityContext.Provider value={showFacilities}>
      {props.children}
    </FacilityContext.Provider>
  );
}
