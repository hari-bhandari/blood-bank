import React, { useReducer } from 'react';
import axios from 'axios';
import BloodContext from './bloodContext';
import bloodReducer from './bloodReducer';
import {
  SET_CURRENT,
  CLEAR_CURRENT,
  REQUEST_BLOOD,ERROR
} from '../types';

const BloodState = props => {
  const initialState = {
    topDonors: null,
    needHelp: null,
    filtered: null,
    error: null,
    loading:true
  };

  const [state, dispatch] = useReducer(bloodReducer,initialState);

  // Get Contacts
  // const getTopDonors = async () => {
  //   try {
  //     const res = await axios.get('/api/contacts');
  //
  //     dispatch({
  //       type: GET_CONTACTS,
  //       payload: res.data
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: CONTACT_ERROR,
  //       payload: err.response.msg
  //     });
  //   }
  // };

  // Add Contact
  const requestForBlood = async data => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/help/req', data, config);

      dispatch({
        type: REQUEST_BLOOD,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg
      });
    }
  };
  //
  // // Delete Contact
  // const deleteContact = async id => {
  //   try {
  //     await axios.delete(`/api/contacts/${id}`);
  //
  //     dispatch({
  //       type: DELETE_CONTACT,
  //       payload: id
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: CONTACT_ERROR,
  //       payload: err.response.msg
  //     });
  //   }
  // };

  // Update Contact
  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <BloodContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </BloodContext.Provider>
  );
};

export default BloodState;
