import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Home from "./Home";
import MainMap from "./MainMap";
import FacilityList from "./Facility";
import { FacilityProvider } from "../providers/FacilityProvider";
import AreaList from "../containers/AreaList";
import Facility from "./Facility";
// will render either the sign-in/sign-up routes or the profile page, depending on whether the user has been signed into the application

export default function Application(props) {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Home path="/" />
      <MainMap path="map" />
      <Facility path="facility" />
      <SignUp path="signUp" />
      <SignIn path="signIn" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
