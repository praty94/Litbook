import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Flag, Storefront,VideoLibrary } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/HomeRounded';
import GroupIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import AvatarWithBadge from '../AvatarWithBadge/AvatarWithBadge';
import {themeColors} from '../../Theme/ThemeHelper';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color:themeColors[theme.palette.type].text
  },
  sidebarIcon:{   
    backgroundColor: themeColors[theme.palette.type].background,
    color:'inherit'
  },
  listItem:{
    borderRadius:10,
    '&:hover':{
      background:themeColors[theme.palette.type].background
    }
  }
}));

export default function LeftSideBar() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button className={classes.listItem}>
      <AvatarWithBadge fullV></AvatarWithBadge>
      </ListItem>
      <ListItem button className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={classes.sidebarIcon}>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Home"/>
      </ListItem>
      <ListItem button className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={classes.sidebarIcon}>
            <Flag />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pages"/>
      </ListItem>
      <ListItem button className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={classes.sidebarIcon}>
            <VideoLibrary />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Videos" />
      </ListItem>
      <ListItem button className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={classes.sidebarIcon}>
            <Storefront />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Marketplace" />
      </ListItem>
      <ListItem button className={classes.listItem}>
        <ListItemAvatar>
          <Avatar className={classes.sidebarIcon}>
            <GroupIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Groups" />
      </ListItem>
    </List>
  );
}
