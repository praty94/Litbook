import React,{useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {AppContext} from '../../Context/Context';
import {ActionTypes} from '../../Context/ActionTypes';
import {themeColors} from '../../Theme/ThemeHelper';

function ToastNotification(props) {
    const [appState,dispatch] = useContext(AppContext);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch({type:ActionTypes.TOGGLE_TOAST,toggle:false});
    };
    return (
        <div>
            <Snackbar open={appState.showToast} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'left' }}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="info" style={{backgroundColor:themeColors[appState.theme].secondary}}>
                    {props.message}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default ToastNotification
