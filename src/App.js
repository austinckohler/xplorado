import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./providers/UserProvider";
import firebase from "firebase/app";

export default function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
