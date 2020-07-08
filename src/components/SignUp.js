import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { auth, uiConfig, generateUserDocument } from "../firebase";
import NavBar from "./NavBar";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  //create a new user with email, password with createUserWithEmailAndPassword method by Firebase, and generate user document for the new user
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError(error.message);
      console.error("Error signing up with password and email", error);
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1471455558438-c1e9d5854d85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "93.36vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
            margin: "auto",
          }}
        >
          <Typography component="h1" variant="h5" className={classes.paper}>
            Sign in
          </Typography>
          <div>{error !== null && <div>{error}</div>}</div>
          <form className={classes.form} noValidate>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="displayName"
              label="First and Last Name"
              name="displayName"
              value={displayName}
              autoFocus
              onChange={(event) => onChange(event)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="userEmail"
              label="Email Address"
              name="userEmail"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={(event) => onChange(event)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="userPassword"
              value={password}
              label="Password"
              type="password"
              id="userPassword"
              autoComplete="current-password"
              onChange={(event) => onChange(event)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs align="center">
                <Link href="signIn" variant="body2" focusVisible>
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
            <StyledFirebaseAuth
              className={classes.submit}
              fullWidth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </form>
        </div>
      </div>
    </>
  );
}
