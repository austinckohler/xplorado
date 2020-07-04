import React, { useContext } from "react";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AreasProvider } from "./providers/AreasProvider";
import { FacilityProvider } from "./providers/FacilityProvider";

export default function App() {
  return (
    <CssBaseline>
      <AreasProvider>
        <FacilityProvider>
          <UserProvider>
            <Application />
          </UserProvider>
        </FacilityProvider>
      </AreasProvider>
    </CssBaseline>
  );
}
