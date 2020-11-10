import React, { createContext, useReducer, useEffect } from 'react';
import { ActionTypes } from './ActionTypes';
import { auth } from '../Firebase/Firebase';
export const AppContext = createContext();

const reducer = (state, action) => {
    let updatedState = state;
    switch (action.type) {
        case ActionTypes.TOGGLE_THEME:
            if (state.theme === 'dark') {
                updatedState = {
                    ...state,
                    theme: "light"
                }
            } else {
                updatedState = {
                    ...state,
                    theme: "dark"
                }
            }
            localStorage.setItem('theme', updatedState.theme);
            return updatedState;
        case ActionTypes.LOGIN_CHANGE:
        case ActionTypes.LOGIN_SUCCESS:
            if (action.user) {
                updatedState = {
                    ...state,
                    loggedIn: action.user ? true : false,
                    user: action.user,
                    waitForLogin:false
                }
            }
            localStorage.setItem("expectSignedIn", true);
            return updatedState;
        case ActionTypes.LOGOUT_SUCCESS:
        case ActionTypes.LOGIN_FAILURE:
            localStorage.removeItem("expectSignedIn");
            return {
                ...state,
                loggedIn: false,
                user: null,
                waitForLogin:false
            }            
        default:
            return state;
    }

}
export const AppContextProvider = (props) => {
    const theme = localStorage.getItem('theme');
    const initialState = { theme: theme || "light", waitForLogin:localStorage.getItem("expectSignedIn") };
    const [appState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                dispatch({ type: ActionTypes.LOGIN_CHANGE, user });
            }
            else {
                dispatch({ type: ActionTypes.LOGOUT_SUCCESS });                
            }
        });
    }, [dispatch]);

    return (
        <AppContext.Provider value={[appState, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}