import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Flag, Storefront, VideoLibrary } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/HomeRounded';
import GroupIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import AvatarWithBadge from '../AvatarWithBadge/AvatarWithBadge';
import { themeColors } from '../../Theme/ThemeHelper';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color: themeColors[theme.palette.type].text
  },
  sidebarIcon: {
    backgroundColor: themeColors[theme.palette.type].background,
    color: 'inherit'
  },
  listItem: {
    borderRadius: 10,
    '&:hover': {
      background: themeColors[theme.palette.type].background
    }
  }
}));

export default function LeftSideBar() {
  const classes = useStyles();
  const leftBarItems = [{ title: "Home", icon: <HomeIcon /> },
  { title: "Pages", icon: <Flag /> },
  { title: "Videos", icon: <VideoLibrary /> },
  { title: "Marketplace", icon: <Storefront /> },
  { title: "Groups", icon: <GroupIcon /> }]
  
  return (
    <List className={classes.root}>
      <ListItem button className={classes.listItem}>
        <AvatarWithBadge fullV></AvatarWithBadge>
      </ListItem>
      {leftBarItems.map((item, key) => {
        return (<ListItem button key={key} className={classes.listItem}>
          <ListItemAvatar>
            <Avatar className={classes.sidebarIcon}>
              {item.icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.title} />
        </ListItem>);
      })}
    </List>
  );
}
