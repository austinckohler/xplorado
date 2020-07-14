import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ProfilePage() {
  const classes = useStyles();

  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);

  return (
    <>
      <NavBar />
      <div className={classes.paper}>
        <header
          style={{
            paddingTop: "50px",
            background: `url(${
              photoURL ||
              "https://images.unsplash.com/photo-1591189327425-aa5f21c7ab2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            }) no-repeat center center`,
            height: "200px",
            width: '200px"',
          }}
        />

        <Container width="md">
          <Typography component="h2" variant="h5">
            {displayName}
          </Typography>
          <Typography component="h3" variant="h5">
            {email}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </Button>
        </Container>
      </div>
    </>
  );
}
