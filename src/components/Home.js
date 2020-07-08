// import { useScrollTrigger, Fab, Zoom } from "@material-ui/core";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import NavBar from "./NavBar";
import HomeHero from "./HomeHero";

import React from "react";
import { CssBaseline } from "@material-ui/core";

function Home() {
  return (
    <>
      <NavBar />
      <HomeHero />
    </>
  );
}

export default Home;
