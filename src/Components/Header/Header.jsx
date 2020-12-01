import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/HomeRounded';
import AddIcon from '@material-ui/icons/Add';
import GroupIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import SearchIcon from '@material-ui/icons/Search';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import MessageIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { themeColors } from '../../Theme/ThemeHelper';
import AvatarWithBadge from '../AvatarWithBadge/AvatarWithBadge';
import clsx from 'clsx';
import { appLogo } from '../../Assets/';
import { Flag, Storefront } from '@material-ui/icons';
import MoreActionsMenu from './MoreActionsMenu';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import GenericMenu from './GenericMenu';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: 30,
    backgroundColor: themeColors[theme.palette.type].background,
    margin: theme.spacing(0, 2),
    height: 44,
    display: 'flex'
  },
  searchUI: {
    [theme.breakpoints.down(1230)]: {
      width: 44
    },
    backgroundColor: fade(themeColors[theme.palette.type].background, 0.8),
    '&:hover': {
      backgroundColor: fade(themeColors[theme.palette.type].background, 1),
    }
  },
  expanded: {
    width: 250
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down(1230)]: {
      paddingLeft: 11
    },
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  sectionDesktop: {
    display: 'flex'
  },
  margin_r_8: {
    marginRight: 8
  },
  iconButton: {
    background: themeColors[theme.palette.type].background,
    padding: 10,
    height: 44,
    width: 44,
  },
  midIconButton: {
    borderRadius: 10,
    width: 100,
    '&:hover': {
      color: themeColors[theme.palette.type].secondary
    },
    [theme.breakpoints.down(1020)]: {
      width: 75
    },
    [theme.breakpoints.down(900)]: {
      width: 60
    }
  },
  appLogo: {
    height: 40,
    width: 40
  },
  midIcon: {
    fontSize: '2rem'
  },
  hide: {
    display: 'none'
  },
  midMoreButton: {
    display: 'none',
    [theme.breakpoints.down(710)]: {
      display: 'inline-flex'
    }
  },
  midGroupButton: {
    [theme.breakpoints.down(710)]: {
      display: 'none'
    }
  },
  midMarketButton: {
    [theme.breakpoints.down(710)]: {
      display: 'none'
    }
  },
  midVideoButton: {
    [theme.breakpoints.down(645)]: {
      display: 'none'
    }
  },
  midPagesButton: {
    [theme.breakpoints.down(645)]: {
      display: 'none'
    }
  },
  avatarContainer: {
    [theme.breakpoints.down(825)]: {
      display: 'none'
    }
  },
  midHomeButton: {
    [theme.breakpoints.down(500)]: {
      display: 'none'
    }
  },
  selected: {
    color: themeColors[theme.palette.type].secondary
  },
  headerMenu: { position: 'fixed', right: 5, zIndex: 1101, top: 54 }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();  
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [pageSelected, setPageSelected] = useState('home');
  const [menuOpen, setMenuOpen] = useState({isOpen:false,menu:null});
  const headerMenuButtons = [{ label: "create post", badgeContent: 3, icon: <AddIcon /> },
  { label: 'show messages', badgeContent: 3, icon: <MessageIcon />,event:{onClick:()=>handleOpen("messages")} },
  { label: 'show notifications', badgeContent: 5, icon: <NotificationsIcon />,event:{onClick:()=>handleOpen("notifications")}}];
  const headerMidButtons = [{
    name: 'home',
    badgeContent: 0,
    icon: <HomeIcon className={classes.midIcon} />,
    customClass: "midHomeButton"
  },
  {
    name: 'pages',
    badgeContent: 0,
    icon: <Flag className={classes.midIcon} />,
    customClass: "midPagesButton"
  },
  {
    name: 'video',
    badgeContent: 5,
    icon: <VideoLibraryIcon className={classes.midIcon} />,
    customClass: "midVideoButton"
  },
  {
    name: 'market',
    badgeContent: 0,
    icon: <Storefront className={classes.midIcon} />,
    customClass: "midMarketButton"
  },
  {
    name: 'group',
    badgeContent: "9+",
    icon: <GroupIcon className={classes.midIcon} />,
    customClass: "midGroupButton"
  }]
  const handleOpen = (val) => {
    setMenuOpen({isOpen:true,menu:val});
  };
  const handleClose = () => {
    setMenuOpen({isOpen:false,menu:null});
  }
  const getMenuToDisplay = (val) =>{
    switch(val){
      case "moreActions" :
      return <MoreActionsMenu></MoreActionsMenu>;
      case "notifications" :
      return <GenericMenu icon={<NotificationsIcon/>} title="No Notifications"></GenericMenu>;
      case "messages" :         
      return <GenericMenu icon={<MessageIcon/>} title="No Messages"></GenericMenu>;
      default:
        return null;
    }
  }
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ boxShadow: '0 5px 8px -9px rgba(0,0,0,.75)' }}>
        {isSearchFocused ?
          <Toolbar style={{ position: 'fixed', zIndex: 1, marginLeft: 40, minHeight: 56 }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Litbook"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                autoFocus
                onBlur={() => setSearchFocused(false)}
              />
            </div></Toolbar> : null}
        <Toolbar style={{ minHeight: 56 }}>
          <img src={appLogo} alt="app-logo" className={classes.appLogo}></img>
          <div className={clsx(classes.search, classes.searchUI)}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Litbook"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onFocus={() => setSearchFocused(true)}
            />
          </div>
          <div className={classes.grow}>
            {headerMidButtons.map((item, index) => {
              return (
              <IconButton color="inherit" onClick={() => setPageSelected(item.name)} key={index} 
                disableRipple className={clsx({ [classes.midIconButton]: true, [classes.margin_r_8]: true, 
                [classes[item.customClass]]: true, [classes.selected]: pageSelected === item.name})}>
                <Badge badgeContent={item.badgeContent} color="secondary">
                  {item.icon}
                </Badge>
              </IconButton>              
            )})}

            <IconButton color="inherit" disableRipple className={clsx(classes.midIconButton, classes.margin_r_8, classes.midMoreButton)}>
              <Badge badgeContent={4} color="secondary" >
                <MenuIcon className={classes.midIcon} />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.avatarContainer}>
            <AvatarWithBadge></AvatarWithBadge>
          </div>
          <div className={classes.sectionDesktop}>
            {headerMenuButtons.map((item, index) => {
              return (
                <IconButton aria-label={item.title} {...item.event} color="inherit" key={index} className={clsx(classes.iconButton, classes.margin_r_8)}>
                  <Badge badgeContent={item.badgeContent} color="secondary" invisible={true}>
                    {item.icon}
                  </Badge>
                </IconButton>
              )
            })}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={()=>handleOpen("moreActions")}
              color="inherit"
              className={classes.iconButton}
            >
              <DownArrow />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-header-menu"
        aria-describedby="header-menu-description"
        className={classes.modal}
        open={menuOpen.isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={menuOpen.isOpen}>
          <Paper className={classes.headerMenu} elevation={2}>
            {getMenuToDisplay(menuOpen.menu)}
          </Paper>
        </Fade>
      </Modal>
      
    </div>
  );
}
