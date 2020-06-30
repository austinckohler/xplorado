
import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
// will render either the sign-in/sign-up routes or the profile page, depending on whether the user has been signed into the application


export default function Application() {
    const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}



