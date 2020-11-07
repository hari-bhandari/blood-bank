import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from "../../util/setAuthToken";
import {
    GET_TOKEN, REMOVE_TOKEN, LOAD_USER, LOAD_USER_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, CLEAR_ERRORS, ADD_TO_CART, ADD_TO_CART_ERROR, CART_COUNT, CART_COUNT_ERROR, GET_CART, GET_CART_ERROR
} from '../types'
const AuthState=props=>{
    const initialState = {
        token: '',
        isAuthenticated: false,
        loading: true,
        user: null,
        error: null,
        cartSize:0,
        cart:null
    };
    const[state,dispatch]=useReducer(authReducer,initialState)

    //get logged in user
    const loadUser=async ()=>{
        if(localStorage.token){
            //sending token to headers
            setAuthToken(localStorage.token)
        }
        try{
            const res =await axios.get('/api/auth/me');
            dispatch({
                type:LOAD_USER,
                payload:res.data.data
            })

        }catch (err) {
            dispatch({
                type:LOAD_USER_FAIL,
                payload:err.response.data.error
            })
        }
    };
    //get user logged in using
    const getUserLoggedIn=async (formData)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/auth/login', formData, config);

            dispatch({
                type: GET_TOKEN,
                payload: res.data.token
            });
            await loadUser()


        } catch (err) {
            dispatch({
                type: REMOVE_TOKEN,
                payload: err.response.data.error
            })
        }


    }
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/auth/register', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            await loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    };
    const addToCart=async id=>{
        try{
            await axios.post(`/api/items/${id}/addToCart`);

        }catch (err) {
            dispatch({
                type:ADD_TO_CART_ERROR,
                payload:err.response.data.error
            })
        }
    };
    const getCartSize=async ()=>{
        try{
            const res=await axios.get(`/api/items/cart/cartSize`);
            dispatch({
                type:CART_COUNT,
                payload:res.data.data.size
            })

        }catch (err) {
            dispatch({
                type:CART_COUNT_ERROR,
                payload:err.response.data.error
            })
        }
    };
    //
    const clearErrors = () => dispatch(
        {type: CLEAR_ERRORS }
    );
    const getCart=async ()=>{
        try{
            const res=await axios.get(`/api/items/cart/user`);
            dispatch({
                type:GET_CART,
                payload:res.data.data
            })


        }catch (err) {
            dispatch({
                type:GET_CART_ERROR,
                payload:err.response.data.error
            })
        }
    };
    const deleteItemFromCart=async (id)=>{
            try{
                await axios.post(`/api/items/${id}/removeFromCart`);

            }catch (err) {
                dispatch({
                    type:ADD_TO_CART_ERROR,
                    payload:err.response.data.error
                })
            }
        };




    return(
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            cartSize:state.cartSize,
            cart:state.cart,
            getUserLoggedIn,
            addToCart,
            loadUser,register,clearErrors,getCartSize,getCart,deleteItemFromCart
        }}>{props.children}</AuthContext.Provider>
    )


}
export default AuthState;