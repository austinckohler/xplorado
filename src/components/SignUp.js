import React, { useContext, useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
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

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChange = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
        <div>{error !== null && <div>{error}</div>}</div> 
        <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="displayName"
                    label="First and Last Name"
                    name={displayName}
                    autoFocus
                    onChange = {(event) => onChange(event)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="userEmail"
                    label="Email Address"
                    name={email}
                    autoComplete="email"
                    autoFocus
                    onChange = {(event) => onChange(event)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name={password}
                    label="Password"
                    type="password"
                    id="userPassword"
                    autoComplete="current-password"
                    onChange = {(event) => onChange(event)}
                  />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {(event) => {createUserWithEmailAndPasswordHandler(event, email, password)}}
                  >
                    Sign Up
                  </Button>
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={() => {signInWithGoogle()}}
                  >
                  Sign in with Google  
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/" variant="body2">
                        Already have an account? Sign In
                      </Link>
                    </Grid>
                    </Grid>
                    </form>
        </div>
        </Container>
  )
  }