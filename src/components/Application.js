import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Home from "./Home";
import AreasMap from "./AreasMap";
import FacilitiesMap from "./FacilitiesMap";

export default function Application(props) {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Home path="/" />
      <AreasMap path="areasMap" />
      <FacilitiesMap path="facilitiesMap" />
      <SignUp path="signUp" />
      <SignIn path="signIn" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
