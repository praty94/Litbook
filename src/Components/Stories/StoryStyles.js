import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from '../../Theme/ThemeHelper';
const StoryStyles = makeStyles((theme) => ({
    container:{
        height:190,
        width:115,
        background:'red',
        borderRadius:10,
        position: 'relative',
        cursor:'pointer',
        margin:5,
        '&:hover':{
            transform:'scale(1.02)'
        },
        transition: 'all 0.25s'
    },
    shade:{
        height:190,
        width:115,
        borderRadius:10,
        background:'rgba(0,0,0,0.1)',
        '&:hover':{
            background:'rgba(0,0,0,0.3)',
        },
        position: 'absolute'
    },
    userName:{
        position: 'absolute',
        bottom: 5,
        left: 5,
        color:"#FFF",
        textShadow: '2px 2px 4px #000000',
        
    },
    contentImg:{
        height:190,
        width:115,
        borderRadius:10,
        objectFit:'cover'      
    },
    userImg:{
        position: 'absolute',
        top: 5,
        left: 5,
        borderRadius:30,
        height:31,
        width:31,
        border:`4px solid ${themeColors[theme.palette.type].secondary}`,
        objectFit:'cover'    
    }
}));

export default StoryStyles;