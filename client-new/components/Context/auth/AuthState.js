import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from './setAuthToken';

import {AUTH} from "../types";
import {PUBLIC_URL_API} from "../../config";

const AuthState = (props) => {
    const initialState = {
        isAuthenticated: false,
        user: null,
        error: null,
        token: null,
        loading: false
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            const token=localStorage.token.replaceAll('"','')
            //sending token to headers
            setAuthToken(token)
            try {
                const res = await axios.get(`${PUBLIC_URL_API}/api/auth/me`);
                dispatch({
                    type: AUTH.LOAD_USER,
                    payload: {...res.data.data,token}
                })

            } catch (err) {
                dispatch({
                    type: AUTH.LOAD_USER_FAIL,
                    payload: err.response.data.error
                })
            }
        }
    };

    // register a  User
    const register = async (data) => {
        dispatch({
            type: AUTH.SIGN_UP,
            payload: data,
        });

    };
    // Login User
    const login = async (data) => {
        dispatch({
            type: AUTH.SIGN_UP,
            payload: data,
        });

    };

    // Logout
    const logout = () => {
        localStorage.removeItem('token')
        dispatch({ type: AUTH.LOG_OUT });
    }

    // Clear Errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                error: state.error,
                loading:state.loading,
                register,
                loadUser,
                login,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;