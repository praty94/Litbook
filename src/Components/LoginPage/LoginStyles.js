import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from '../../Theme/ThemeHelper';
const LoginStyles = makeStyles((theme) => ({
    loginContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        background:themeColors[theme.palette.type].sectionColor
    },
    button:{
        minWidth:250
    },
    paperContainer:{
        padding:16
    },
    appLogo: {
        height: 100,
        width: 100
    },
    googleLogo:{
        height:30,
        width:30
    },
    actionContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
}));

export default LoginStyles;