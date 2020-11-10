import React from 'react'
import { Paper, InputBase, Divider, Typography } from '@material-ui/core';
import Avatar from '../Avatar/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { themeColors } from '../../Theme/ThemeHelper';
import VideoIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
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
        backgroundColor: themeColors[theme.palette.type].background,
        margin: theme.spacing(0, 2),
        height: 44,
        display: 'flex',
        flex: 10
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
    }

}));
function StatusUpdateWidget() {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <Paper className={classes.paperContainer}>
                <div className={classes.rowContainer}>
                    <div className={classes.avatarContainer}>
                        <Avatar size="medium"></Avatar>
                    </div>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="What's on your mind?"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
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
                        <MoodIcon fontSize="large" style={{ fontSize: '1.85rem', color: '#f5b727' }}></MoodIcon>
                        <Typography style={{ marginLeft: 5 }}><b>Feeling/Activity</b></Typography>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default StatusUpdateWidget
