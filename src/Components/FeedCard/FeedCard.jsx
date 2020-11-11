import React from 'react'
import FeedCardStyles from './FeedCardStyles';
import { Paper, Avatar, Typography, Divider } from '@material-ui/core';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareIcon from '@material-ui/icons/NearMeOutlined';
const toDateTime = (timeStamp) => {
    if (timeStamp) {
        let t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(timeStamp.seconds);
        let d = new Date();
        let diff = (d.getTime() - t.getTime()) / 1000;//seconds
        diff /= 60;//minutes  
        if (diff > 59) {
            diff = Math.floor(diff / 60);//hours
            if (diff > 23) {
                diff = Math.floor(diff / 24) + " d";
            } else {
                diff = diff + " h";
            }
        } else {
            diff = Math.floor(diff) + " m";
        }
        return diff;
    }else{
        return "0 m";
    }
}
function FeedCard({ name, profilePic, timeStamp, contentTitle, contentImg, likes }) {
    const classes = FeedCardStyles();
    return (
        <div className={classes.parentContainer}>
            <Paper className={classes.container}>
                <div className={classes.userContainer}>
                    <Avatar alt={name} src={profilePic} />
                    <div className={classes.userTextContainer}>
                        <Typography><b>{name}</b></Typography>
                        <Typography variant="subtitle1" className={classes.subtitleText}>{toDateTime(timeStamp)}</Typography>
                    </div>
                </div>
                <Typography style={{ margin: 8 }}>{contentTitle}</Typography>
                {contentImg ?
                    <img src={contentImg} alt="post-img" className={classes.contentImg}></img> : null}
                <div className={classes.reactionContainer}>
                    {likes} {likes > 1 ? "likes" : "like"}
                </div>
                <Divider></Divider>
                <div className={classes.actionsContainer}>
                    <div className={classes.buttonContainer}>
                        <LikeIcon fontSize="small"></LikeIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Like</b></Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <CommentIcon fontSize="small"></CommentIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Comment</b></Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <ShareIcon fontSize="small"></ShareIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Share</b></Typography>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default FeedCard
