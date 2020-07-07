import React, { useState } from "react";
import { uiConfig, auth } from "../firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    verticalAlign: "middle",
  },
}));

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
      console.error("Error signing in with password and email", error);
    });
  };

  const onChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>{error !== null && <div>{error}</div>}</div>
        <form
          className={classes.form}
          noValidate
          style={{ maxWidth: "1024px" }}
        >
          <TextField
            variant="outlined"
            margin="dense"
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
            variant="outlined"
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
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign In
          </Button>

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <Grid container style={{ padding: "1rem" }}>
            <Grid item xs>
              <Link href="passwordReset" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}
