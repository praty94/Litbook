import React, { useState, useContext } from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Divider, Paper, Typography, TextField, Button, IconButton } from '@material-ui/core';
import AvatarWithBadge from '../AvatarWithBadge/AvatarWithBadge';
import VideoIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import { themeColors } from '../../Theme/ThemeHelper';
import { AppContext } from '../../Context/Context';
import db from '../../Firebase/Firebase';
import firebase from 'firebase';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperContainer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: theme.palette.primary.main
  },
  userContainer: {
    padding: `${theme.spacing(2)}px 0px`,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 400
  },
  imgContainer:{
    margin: `${theme.spacing(2)}px 0px`,
    position:'relative'
  },
  contentImg: { objectFit: 'cover', height: 200, width: 400},
  addFeatContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `1px solid ${themeColors[theme.palette.type].background}`,
    borderRadius: 10,
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)}px 0px`
  },
  featContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  removeImgButton:{
    position:'absolute',
    right:5,
    top:5,
    padding:5,
    background:fade(themeColors[theme.palette.type].background,0.3),
    '&:hover':{
      background:fade(themeColors[theme.palette.type].background,0.5)
    }
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [{ user }] = useContext(AppContext);
  const [contentText, setContentText] = useState(null);
  const [contentImg, setContentImg] = useState(null);
  const onTextChanged = (e) => {
    const str = e.target.value;
    if (str && str.trim().length > 0) {  
      const str = e.target.value;  
      setContentText(str);   

      // eslint-disable-next-line  
      const regex = /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#]?[\w-]+)*\/?.[\S]*/         
      let myArray = str.match(regex);
      if (myArray && myArray.length) {
        if(myArray[0] !== contentImg)
          validateAndLoadImg(myArray[0]);
      } 
    } else {
      setContentText(null);
    }
  }
  const validateAndLoadImg = (url) => {
    let img = new Image();
    img.onload = function () { setContentImg(url) };
    //img.onerror = function () { setContentImg(null); }
    img.src = url;
  }

  const handleClose = () => {
    setContentImg(null);
    props.handleClose(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: user.displayName,
      profilePic: user.photoURL,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      contentTitle: contentText,
      contentImg: contentImg,
      likes: 0
    };
    db.collection('posts').add(payload);
    setContentImg(null);
    setContentText(null);
    props.handleClose(false);
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-create-post"
        aria-describedby="create-post-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Paper className={classes.paperContainer}>
            <Typography variant="h5" gutterBottom><b>Create Post</b></Typography>
            <Divider></Divider>
            <div className={classes.userContainer}>
              <AvatarWithBadge fullV showAccessScope></AvatarWithBadge>
            </div>
            <div className={classes.mainContainer}>
              <TextField
                autoFocus
                id="post-content"
                placeholder="What's on your mind?"
                multiline
                rowsMax={8}
                rows={4}
                InputProps={{ disableUnderline: true, style: { fontSize: '1.4rem' } }}
                onChange={onTextChanged}
              />
              {contentImg ?
              <div className={classes.imgContainer}>
                <IconButton className={classes.removeImgButton} onClick={()=>setContentImg(null)}>
                  <ClearIcon></ClearIcon>
                </IconButton>
                <img alt="content-img" src={contentImg} className={classes.contentImg}></img> 
              </div>: null}
              <div className={classes.addFeatContainer}>
                <Typography>Add to your post</Typography>
                <div className={classes.featContainer}>
                  <VideoIcon style={{ fontSize: '2rem', color: '#ef2748' }}></VideoIcon>
                  <PhotoIcon style={{ fontSize: '1.7rem', marginLeft: 10, color: '#45bd62' }}></PhotoIcon>
                  <MoodIcon style={{ fontSize: '1.7rem', marginLeft: 10, color: '#f5b727' }}></MoodIcon>
                </div>
              </div>
              <Button variant="contained" color="secondary" disabled={contentText || contentImg ? false : true} onClick={(e) => handleSubmit(e)}>Post</Button>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
