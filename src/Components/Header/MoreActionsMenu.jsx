import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import LightIcon from '@material-ui/icons/Brightness7';
import DarkIcon from '@material-ui/icons/Brightness4';
import { AppContext } from '../../Context/Context';
import { ActionTypes } from '../../Context/ActionTypes';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../../Firebase/Firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 250
  },
}));

export default function MoreActionsMenu() {
  const classes = useStyles();
  const [appState, dispatch] = useContext(AppContext);
  const handleToggle = () => {
    dispatch({ type: ActionTypes.TOGGLE_THEME });
  }
  const handleLogout = () => {
    if (auth) {
      auth.signOut().then(response => {
        dispatch({ type: ActionTypes.LOGOUT_SUCCESS });
      });
    } else {
      dispatch({ type: ActionTypes.LOGOUT_SUCCESS });
    }
  }
  return (
    <List className={classes.root}>
      <ListItem button onClick={() => handleToggle('theme')}>
        <ListItemIcon>
          {appState.theme === "light" ? <LightIcon /> :
            <DarkIcon />}
        </ListItemIcon>
        <ListItemText id="switch-theme" primary="Switch Theme" />       
      </ListItem>
      <ListItem button onClick={() => handleLogout()}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
}
