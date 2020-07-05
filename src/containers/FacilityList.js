import React, { useContext } from "react";
import { FacilityContext } from "../providers/FacilityProvider";
// import MainMap from "../components/MainMap";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Facility from "../components/Facility";
import NavBar from "../components/NavBar";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     margin: theme.spacing(2),
//   },
// }));

export default function FacilityList(props) {
  //   const classes = useStyles();
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
  //   console.log("drill", facilityInfo);
  return <>{facilityInfo}</>;
}
