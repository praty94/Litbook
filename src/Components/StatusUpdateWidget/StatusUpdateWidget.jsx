import React, { useState } from 'react'
import { Paper, Divider, Typography } from '@material-ui/core';
import Avatar from '../Avatar/Avatar';
import { fade, makeStyles } from '@material-ui/core/styles';
import { themeColors } from '../../Theme/ThemeHelper';
import VideoIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import CreatePostModal from '../CreatePostModal/CreatePostModal';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(2),
        transition: theme.transitions.create('width'),
        width: '100%'
    },
    search: {
        position: 'relative',
        borderRadius: 30,
        margin: theme.spacing(0, 2),
        height: 44,
        display: 'flex',
        alignItems: 'center',
        flex: 10,
        cursor: 'pointer',
        backgroundColor: fade(themeColors[theme.palette.type].background, 0.6),
        '&:hover': {
            backgroundColor: fade(themeColors[theme.palette.type].background, 1),
        }
    },
    avatarContainer: {
        flex: 1
    },
    rowContainer: { padding: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        '&:hover': {
            background: themeColors[theme.palette.type].background,
            cursor: 'pointer'
        },
        borderRadius: 10,
        padding: 4,
        margin: 2
    },
    paperContainer: {
        minWidth: 620,
        background: theme.palette.primary.main
    },
    statusUpdateText: {
        marginLeft: 20,
        fontSize: '1.2rem',
        color: themeColors[theme.palette.type].subTitleText
    }

}));
function StatusUpdateWidget() {
    const classes = useStyles();
    const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
    const handleClose = () => {
        setCreatePostModalOpen(false);
    };
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <Paper className={classes.paperContainer}>
                <div className={classes.rowContainer}>
                    <div className={classes.avatarContainer}>
                        <Avatar size="medium"></Avatar>
                    </div>
                    <div className={classes.search} onClick={() => setCreatePostModalOpen(true)}>
                        <Typography className={classes.statusUpdateText}>What's on your mind?</Typography>
                    </div>
                </div>
                <Divider />
                <div className={classes.rowContainer}>
                    <div className={classes.buttonContainer}>
                        <VideoIcon style={{ fontSize: '1.85rem', color: '#ef2748' }}></VideoIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Live Video</b></Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <PhotoIcon style={{ fontSize: '1.85rem', color: '#45bd62' }}></PhotoIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Photo/Video</b></Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <MoodIcon style={{ fontSize: '1.85rem', color: '#f5b727' }}></MoodIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Feeling/Activity</b></Typography>
                    </div>
                </div>
                <CreatePostModal open={createPostModalOpen} handleClose={handleClose}></CreatePostModal>
            </Paper>
        </div>
    )
}

export default StatusUpdateWidget
