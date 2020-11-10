import React,{useContext} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeHelper from '../../Theme/ThemeHelper';
import Header from '../Header/Header';
import Home from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage';
import {AppContext} from '../../Context/Context';
import { LinearProgress } from '@material-ui/core';

const AppShell = () => {
    const [appState] = useContext(AppContext);
    return (
        <React.Fragment>
            {appState.waitForLogin ? <LinearProgress color="secondary"></LinearProgress>:
            appState.user ?
            <ThemeProvider theme={ThemeHelper(appState.theme)}>                
                <Header></Header>                
                <Home></Home>
            </ThemeProvider> : 
            <LoginPage></LoginPage> }
        </React.Fragment>
    )
}

export default AppShell
