import React, { useContext,useState } from 'react';
import firebase from 'firebase';
import { auth, provider } from '../../Firebase/Firebase';
import { ActionTypes } from '../../Context/ActionTypes';
import { AppContext } from '../../Context/Context';
import LoginStyles from './LoginStyles';
import { Paper, Typography, Button,FormControlLabel,Checkbox } from '@material-ui/core';
import { appLogo, googleLogo } from '../../Assets';

const LoginPage = () => {
    const classes = LoginStyles();
    const [keepSignedIn,setKeepSignedIn] = useState(false);
    // eslint-disable-next-line
    const [state, dispatch] = useContext(AppContext);
    const signIn = () => {
        const persistence = keepSignedIn ? firebase.auth.Auth.Persistence.LOCAL :  firebase.auth.Auth.Persistence.SESSION;
        auth.setPersistence(persistence)
            .then(function () {
                // Existing and future Auth states are now persisted in the current
                // session or Local storage based on user's choice. 
                // New sign-in will be persisted with session persistence.
                return auth.signInWithPopup(provider)
                    .then((result) => {
                        dispatch({ type: ActionTypes.LOGIN_SUCCESS, user: result.user })
                    }).catch((error) => console.error(error));
            }).catch(function (error) {
                console.error(error);
            });

    }

    const handleKeepSignedInChange = (e) => {
        setKeepSignedIn(e.target.checked);
    }
    return (
        <div className={classes.loginContainer}>
            <Paper className={classes.paperContainer}>
                <img src={appLogo} alt="app-logo" className={classes.appLogo}></img>
                <Typography variant="h4" style={{ margin: 16 }}><b>Welcome to Litbook</b></Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 16 }}>Please login to continue..</Typography>
                <div className={classes.actionContainer}>
                <Button
                    variant="outlined"
                    color="default"
                    className={classes.button}
                    startIcon={<img alt="google logo" src={googleLogo} className={classes.googleLogo} />}
                    onClick={() => signIn()}>
                    Login
                </Button>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleKeepSignedInChange}
                            name="keepSignedinCB"
                        />
                    }
                    style={{marginTop:5}}
                    label="Keep me signed in"
                />
                </div>
            </Paper>
        </div>
    )
}

export default LoginPage;
