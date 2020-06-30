// will display the user’s display name, email, and profile picture or a placeholder image if they are signing in via email/password

import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
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

  

function ProfilePage() {
    const classes = useStyles();
    return (
        <Container>
            <div>
                <div style={{
                    background: `url(https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80) no-repeat center center`,
                    backgroundSize: 'cover',
                    height: "200px",
                    width: '200px"'
                }}></div>
             <div className={classes.paper}>
             <Typography component="h2" variant="h5">
               Name
             </Typography>
             <Typography component="h3" variant="h5">
               Email
             </Typography>
             </div>
             </div>
             <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                 Sign Out
             </Button>

        </Container>
    )
}

export default ProfilePage
