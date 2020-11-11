import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from '../../Theme/ThemeHelper';
const FeedCardStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        width: 620,
        background:theme.palette.primary.main,
        flexDirection:'column',
        textAlign:'left'
    },
    parentContainer:{ display: 'flex', justifyContent: "center",marginTop:15 },
    userContainer:{
        display:'flex',
        alignItems:'center',
        padding:8
    },
    userTextContainer:{
        marginLeft:10
    },
    contentImg:{
        height:310,
        width:620,
        objectFit:'cover' 
    },
    reactionContainer:{
        margin:8
    },
    actionsContainer:{
        padding: 8, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color:themeColors[theme.palette.type].subTitleText,
        flex: 1,
        '&:hover': {
            background: themeColors[theme.palette.type].background,
            cursor: 'pointer'
        },
        borderRadius: 8,
        padding: 4,
        margin: 2
    },
    subtitleText:{
        color:themeColors[theme.palette.type].subTitleText,
        fontSize:'0.85rem'
    }    
}));

export default FeedCardStyles;