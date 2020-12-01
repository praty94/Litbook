import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({    
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:250,        
        padding:theme.spacing(2)
    },
    marginLeft:{        
        marginLeft:10
    }
}));

export default function GenericMenu(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {props.icon}<Typography className={classes.marginLeft}>{props.title}</Typography>
        </div>
    );
}
