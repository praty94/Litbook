import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from '../../Theme/ThemeHelper';
const HomeStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        marginTop:56,
        paddingTop:10,
        minHeight:'100vh',
        background:themeColors[theme.palette.type].sectionColor
    },
    leftSection:{
        flex:'1 1',
        display:'flex',
        justifyContent:'center'
    },
    midSection:{
        flex:'2 2'
    },
    rightSection:{
        flex:'1 1'
    }
}));

export default HomeStyles;