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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = (event) => {
    setMenuOpen(!menuOpen);
  };

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
            <IconButton color="inherit" onClick={() => setPageSelected('home')} disableRipple className={clsx({ [classes.midIconButton]: true, [classes.margin_r_8]: true, [classes.midHomeButton]: true, [classes.selected]: pageSelected === 'home' })}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <HomeIcon className={classes.midIcon} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => setPageSelected('pages')} disableRipple className={clsx({ [classes.midIconButton]: true, [classes.margin_r_8]: true, [classes.midPagesButton]: true, [classes.selected]: pageSelected === 'pages' })}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <Flag className={classes.midIcon} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => setPageSelected('video')} disableRipple className={clsx({ [classes.midIconButton]: true, [classes.margin_r_8]: true, [classes.midVideoButton]: true, [classes.selected]: pageSelected === 'video' })}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <VideoLibraryIcon className={classes.midIcon} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => setPageSelected('market')} disableRipple className={clsx({ [classes.midIconButton]: true, [classes.margin_r_8]: true, [classes.midMarketButton]: true, [classes.selected]: pageSelected === 'market' })}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <Storefront className={classes.midIcon} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => setPageSelected('group')} disableRipple className={clsx({ [classes.midIconButton]: true, [classes.margin_r_8]: true, [classes.midGroupButton]: true, [classes.selected]: pageSelected === 'group' })}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <GroupIcon className={classes.midIcon} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" disableRipple className={clsx(classes.midIconButton, classes.margin_r_8, classes.midMoreButton)}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <MenuIcon className={classes.midIcon} />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.avatarContainer}>
            <AvatarWithBadge></AvatarWithBadge>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="create post" color="inherit" className={clsx(classes.iconButton, classes.margin_r_8)}>
              <Badge badgeContent={4} color="secondary" invisible={true}>
                <AddIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show messages" color="inherit" className={clsx(classes.iconButton, classes.margin_r_8)}>
              <Badge badgeContent={4} color="secondary" invisible={true} >
                <MessageIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show notifications" color="inherit" className={clsx(classes.iconButton, classes.margin_r_8)}>
              <Badge badgeContent={17} color="secondary" invisible={true}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              className={classes.iconButton}
            >
              <DownArrow />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {menuOpen ?
        <ClickAwayListener onClickAway={()=>setMenuOpen(false)}>
          <Paper className={classes.headerMenu} elevation={2}>
            <MoreActionsMenu></MoreActionsMenu>
          </Paper>
        </ClickAwayListener> : null}
    </div>
  );
}
