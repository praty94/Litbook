import { Typography } from '@material-ui/core';
import React from 'react'
import StoryStyles from './StoryStyles';
function Story({userImg,contentImg,title}) {
    const classes = StoryStyles();
    return (
        <div className={classes.container}>
            <div className={classes.shade}></div>
            <img src={contentImg} alt="content-img" className={classes.contentImg}></img>
            <img src={userImg} alt="user-img" className={classes.userImg}></img>
            <Typography variant="subtitle1" className={classes.userName}>{title}</Typography>
        </div>
    )
}

export default Story
