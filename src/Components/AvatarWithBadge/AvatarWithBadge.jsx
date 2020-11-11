import React, { useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { themeColors } from '../../Theme/ThemeHelper';
import { AppContext } from '../../Context/Context';
import PublicIcon from '@material-ui/icons/Public';

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginRight: 8,
        padding: 6,
        borderRadius: 30,
        alignItems: 'center',
        '&:hover': {
            background: themeColors[theme.palette.type].background,
            cursor: 'pointer'
        }
    },
    rootFull: {
        display: 'flex',
        alignItems: 'center'
    },
    small: {
        height: 28,
        width: 28,
    },
    medium: {
        height: 40,
        width: 40
    },
    content:{
        textAlign:'left'
    },
    accessScope:{
        marginLeft:10,
        display:'flex',
        alignItems:'center'
    }
}));

export default function BadgeAvatars(props) {
    const classes = useStyles();
    const [appState] = useContext(AppContext);
    const getFirstName = (displayName) => {
        const splitName = displayName ? displayName.split(' ') : ['', ''];
        return splitName[0];
    }

    return (
        <div className={props.fullV ? classes.rootFull : classes.root}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar alt={appState.user.displayName} src={appState.user.photoURL} className={props.fullV ? classes.medium : classes.small} />
            </StyledBadge>
            <div className={classes.content}>
                {props.hideName ? null :
                    <Typography style={{ marginLeft: props.fullV ? 10 : 5, fontSize: '1rem' }}>{props.fullV ? appState.user.displayName : <b>{getFirstName(appState.user.displayName)}</b>}</Typography>}
                {props.showAccessScope ? <div className={classes.accessScope}><PublicIcon style={{fontSize:'0.85rem'}}/> <Typography style={{fontSize:'0.85rem',marginLeft:5}}>Public</Typography> </div>: null}
            </div>
        </div>
    );
}