import React,{useContext} from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppContext} from '../../Context/Context';
const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }
}))(Badge);

const useStyles = makeStyles((theme) => ({    
    small: {
        height: 28,
        width: 28,
    },
    medium: {
        height: 40,
        width: 40
    }
}));

export default function BadgeAvatars(props) {
    const classes = useStyles();
    const [appState] = useContext(AppContext);
    return (        
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
            <Avatar alt={appState.user.displayName} src={appState.user.photoURL} 
                className={classes[props.size]} />
            </StyledBadge>
            
    );
}