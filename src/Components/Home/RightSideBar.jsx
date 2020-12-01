import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Divider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles((theme) => ({
    standardPadding:{
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    headingContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',               
        paddingTop: theme.spacing(1),
    },
    largeAvatar:{
        height:65,
        width:65
    },
    standardContainer:{
        display:'flex',
        textAlign:'left',
        alignItems:'center'
    },
    subcontainer:{
        display:'flex',
        paddingLeft:10,
        flexDirection:'column',
        alignItems:'flex-start'
    },
    actionContainer:{
        display:'flex',
        paddingTop:5
    },
    actionButton:{
        textTransform: 'none',
        marginRight:5,
        width:125 
    },
    cakeIcon:{
        color:theme.palette.secondary.main
    }
}));

export default function LeftSideBar() {
    const classes = useStyles();
    const [friendReqActive,setfriendReqActive] = useState(true);
    return (
        <React.Fragment>
            {friendReqActive ? <>
            <div className={clsx(classes.headingContainer,classes.standardPadding)}>
                <Typography color="textSecondary">Friend requests</Typography>
                <Button color="secondary" style={{ textTransform: 'none' }}>See all</Button>
            </div>
            <div className={clsx(classes.standardContainer,classes.standardPadding)}>
                <Avatar alt="friendName" src="https://imgur.com/tKk3itc.jpg"
                    className={classes.largeAvatar} />
                    <div className={classes.subcontainer}>
                        <Typography color="textPrimary">Yara Jenkins</Typography>
                        <div className={classes.actionContainer}>
                            <Button variant="contained" color="secondary" className={classes.actionButton} onClick={()=>setfriendReqActive(false)}>Confirm</Button>
                            <Button variant="contained" color="primary" className={classes.actionButton} onClick={()=>setfriendReqActive(false)}>Delete</Button>
                        </div>
                    </div>
            </div>
            <Divider style={{margin:10}}/></>:null}
            <div className={clsx(classes.headingContainer,classes.standardPadding)}>
                <Typography color="textSecondary">Birthdays</Typography>
                <Button color="secondary" style={{ textTransform: 'none' }}>See all</Button>
            </div>
            <div className={clsx(classes.standardContainer,classes.standardPadding)}>
                <CakeIcon fontSize="large" className={classes.cakeIcon}></CakeIcon>
                <Typography color="textPrimary" style={{marginLeft:15}}>Alexa and 5 others have their birthdays today.</Typography>
            </div>
        </React.Fragment>
    );
}
