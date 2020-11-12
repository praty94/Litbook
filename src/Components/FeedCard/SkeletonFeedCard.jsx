import React from 'react'
import FeedCardStyles from './FeedCardStyles';
import { Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

function SkeletonFeedCard() {
    const classes = FeedCardStyles();
    return (
        <div className={classes.parentContainer}>
            <Paper className={classes.container}>
                <div className={classes.userContainer}>
                    <Skeleton animation="wave" variant="circle">
                        <Avatar />
                    </Skeleton>
                    <div className={classes.userTextContainer}>
                        <Skeleton animation="wave" variant="rect"><Typography>Username</Typography></Skeleton>
                    </div>
                </div>
                <Skeleton animation="wave" variant="rect" className={classes.media} />

            </Paper>
        </div>
    )
}

export default SkeletonFeedCard
