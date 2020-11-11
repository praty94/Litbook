import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LightIcon from '@material-ui/icons/Brightness7';
import DarkIcon from '@material-ui/icons/Brightness4';
import { AppContext } from '../../Context/Context';
import { ActionTypes } from '../../Context/ActionTypes';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../../Firebase/Firebase';
import { themeColors } from '../../Theme/ThemeHelper';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 250
  },
}));

export default function MoreActionsMenu() {
  const classes = useStyles();
  const [appState, dispatch] = useContext(AppContext);
  const handleToggle = () => {
    if(appState.theme === "light"){
      document.body.style.backgroundColor = themeColors.dark.sectionColor;
    }else{
      document.body.style.backgroundColor = themeColors.light.sectionColor;
    }

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
