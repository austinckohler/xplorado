// will display the user’s display name, email, and profile picture or a placeholder image if they are signing in via email/password


//useContext hook was used to get current value of UserContext and grabbed the pertainent data.
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function ProfilePage() {
    const classes = useStyles();

    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    console.log(user);

    return (
        <Container>
            <div>
                <div style={{
                    background: `url(${photoURL || 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'}) no-repeat center center`,
                    backgroundSize: 'cover',
                    height: "200px",
                    width: '200px"'
                }}>
                </div>
                <div className={classes.paper}>
                <Typography component="h2" variant="h5">
                {displayName}
                </Typography>
                <Typography component="h3" variant="h5">
                {email}
                </Typography>
                </div>
             </div>
             <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {() => {auth.signOut()}}
                    >
                 Sign Out
             </Button>
        </Container>
    )
}

