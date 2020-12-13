import React, { useReducer } from 'react';
import axios from 'axios';
import BloodContext from './bloodContext';
import bloodReducer from './bloodReducer';
import {
   ERROR,GET_BLOOD_REQUESTS,GET_DONORS
} from '../types';

const BloodState = props => {
  const initialState = {
    topDonors: null,
    bloodRequests: null,
    filtered: null,
    error: null,
    loading:true
  };

  const [state, dispatch] = useReducer(bloodReducer,initialState);

  // Get Contacts
  const getDonors = async () => {
    try {
      const res = await axios.get('/api/donors');

      dispatch({
        type: GET_DONORS,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.error
      });
    }
  };
  const getBloodRequests = async () => {
    try {
      const res = await axios.get('/api/help/?isDonation=false');

      dispatch({
        type: GET_BLOOD_REQUESTS,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.error
      });
    }
  };
  // Add Contact
  const requestForBlood = async data => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      await axios.post('/api/help/req', data, config);
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg
      });
    }
  };

  // // Clear Contacts
  // const clearBloodsRequests = () => {
  //   dispatch({ type: CLEAR_BLOODS_REQUESTS });
  // };
  // const clearTopDonors = () => {
  //   dispatch({ type: CLEAR_TOP_DONORS });
  // };
  // // Set Current Contact
  // const setCurrent = contact => {
  //   dispatch({ type: SET_CURRENT, payload: contact });
  // };
  //
  // // Clear Current Contact
  // const clearCurrent = () => {
  //   dispatch({ type: CLEAR_CURRENT });
  // };
  //
  // // Filter Contacts
  // const filterContacts = text => {
  //   dispatch({ type: FILTER_CONTACTS, payload: text });
  // };
  //
  // // Clear Filter
  // const clearFilter = () => {
  //   dispatch({ type: CLEAR_FILTER });
  // };

  return (
    <BloodContext.Provider
      value={{
        topDonors: state.topDonors,
        bloodRequests: state.bloodRequests,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getDonors,requestForBlood,getBloodRequests
      }}
    >
      {props.children}
    </BloodContext.Provider>
  );
};

export default BloodState;
