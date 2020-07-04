import React, { useState, createContext, useEffect } from "react";

export const AreaContext = createContext();
const areasURL = "http://localhost:3000/areas/";

export function AreasProvider(props) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    getAreas();
  }, []);

  const getAreas = async () => {
    await fetch(areasURL)
      .then((response) => response.json())
      .then((retrieveAreas) => setAreas(retrieveAreas));
  };

  return (
    <AreaContext.Provider value={[areas, setAreas]}>
      {props.children}
    </AreaContext.Provider>
  );
}
