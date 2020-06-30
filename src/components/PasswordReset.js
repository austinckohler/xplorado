// allows the user to reset their password in the event they lose or forget it
import React, { useState } from "react";
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from "../firebase";

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

export default function PasswordReset() {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);
    const onChange = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  //sendPasswordResetEmail -firebase method for users to reset password. takes in email as arguement sends email or throws error
  const sendResetEmail = event => {
    event.preventDefault();
    auth    
    .sendPasswordResetEmail(email)
    .then(() => {
        setEmailHasBeenSent(true)
        setTimeout(() => {
            setEmailHasBeenSent(false)}, 3000)
        })
        .catch(() => {
            setError("Error resetting password, please try again")
    })
    }


  const classes = useStyles();
return (
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <Typography variant="h3" gutterBottom marked="center" align="center">
                Forgot your password?
                </Typography>
                <Typography variant="body2" align="center">
            {"Enter your email address below and we'll " +
              'send you a link to reset your password.'}
          </Typography>
                <form className={classes.form} noValidate action="">
                {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                    id="userEmail"
                    label="Email Address"
                    name={email}
                    autoComplete="email"
                    autoFocus
                    onChange = {onChange}
                  />
                  <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={event => {
                        sendResetEmail(event)
                    }}
                    >
                    Send me a reset link
                    </Button>
                    </form>
                    <Link href="signUp" variant="body2">&larr; back to sign in page</Link>
                </div>
                </Container>
    )
}


